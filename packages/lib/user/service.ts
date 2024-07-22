import "server-only";
import { Prisma } from "@prisma/client";
import { cache as reactCache } from "react";
import { z } from "zod";
import { prisma } from "@cowk8s/database";
import { ZId } from "@cowk8s/types/environment";
import { DatabaseError, ResourceNotFoundError } from "@cowk8s/types/errors";
import { TMembership } from "@cowk8s/types/memberships";
import { TUser, TUserCreateInput, TUserUpdateInput, ZUserUpdateInput } from "@cowk8s/types/user";
import { cache } from "../cache";
import { deleteMembership, updateMembership } from "../membership/service";
import { deleteOrganization } from "../organization/service";
import { validateInputs } from "../utils/validate";
import { userCache } from "./cache";

const responseSelection = {
  id: true,
  name: true,
  email: true,
  emailVerified: true,
  imageUrl: true,
  createdAt: true,
  updatedAt: true,
  role: true,
  twoFactorEnabled: true,
  identityProvider: true,
  objective: true,
  notificationSettings: true,
};

// function to retrive basic information about a user's user
export const getUser = reactCache(
  (id: string): Promise<TUser | null> =>
    cache(
      async () => {
        validateInputs([id, ZId]);

        try {
          const user = await prisma.user.findUnique({
            where: {
              id,
            },
            select: responseSelection,
          });

          if (!user) {
            return null;
          }
          return user;
        } catch (error) {
          if (error instanceof Prisma.PrismaClientKnownRequestError) {
            throw new DatabaseError(error.message);
          }

          throw error;
        }
      },
      [`getUser-${id}`],
      {
        tags: [userCache.tag.byId(id)],
      }
    )()
);

export const getUserByEmail = reactCache(
  (email: string): Promise<TUser | null> =>
    cache(
      async () => {
        validateInputs([email, z.string().email()]);

        try {
          const user = await prisma.user.findFirst({
            where: {
              email,
            },
            select: responseSelection,
          });

          return user;
        } catch (error) {
          if (error instanceof Prisma.PrismaClientKnownRequestError) {
            throw new DatabaseError(error.message);
          }

          throw error;
        }
      },
      [`getUserByEmail-${email}`],
      {
        tags: [userCache.tag.byEmail(email)],
      }
    )()
);

// function to update a user's user
export const updateUser = async (personId: string, data: TUserUpdateInput): Promise<TUser> => {
  validateInputs([personId, ZId], [data, ZUserUpdateInput.partial()]);

  try {
    const updatedUser = await prisma.user.update({
      where: {
        id: personId,
      },
      data: data,
      select: responseSelection,
    });

    userCache.revalidate({
      email: updatedUser.email,
      id: updatedUser.id,
    });

    return updatedUser;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2016") {
      throw new ResourceNotFoundError("User", personId);
    }
    throw error; // Re-throw any other errors
  }
};

export const createUser = async (data: TUserCreateInput): Promise<TUser> => {

  try {
    const user = await prisma.user.create({
      data: data,
      select: responseSelection,
    });

    return user;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
      throw new DatabaseError("User with this email already exists");
    }

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      throw new DatabaseError(error.message);
    }

    throw error;
  }
};
import "server-only";
import { Prisma } from "@prisma/client";
import { cache as reactCache } from "react";
import { DatabaseError } from "@cowk8s/types/errors";
import { TIntegration } from "@cowk8s/types/integration";

export const createOrUpdateIntegration = async (
  environmentId: string,

): Promise<TIntegration> => {

  try {

  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.error(error);
      throw new DatabaseError(error.message);
    }
    throw error;
  }
}
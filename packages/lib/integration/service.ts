import "server-only";
import { Prisma } from "@prisma/client";
import { cache as reactCache } from "react";
import { prisma } from "@cowk8s/database";
import { DatabaseError } from "@cowk8s/types/errors";
import { TIntegration, TIntegrationInput, ZIntegrationType } from  "@cowk8s/types/integration";
import { integrationCache } from "./cache";

export const createOrUpdateIntegration = async (
  environmentId: string,
  integrationData: TIntegrationInput
): Promise<TIntegration> => {

  try {
    const integration = await prisma.integration.upsert({
      where: {
        type_environmentId: {
          environmentId,
          type: integrationData.type,
        },
      },
      update: {
        ...integrationData,
        environment: { connect: { id: environmentId } },
      },
      create: {
        ...integrationData,
        environment: { connect: { id: environmentId } },
      },
    });

    integrationCache.revalidate({
      environmentId,
      type: integrationData.type,
    });
    return integration;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.error(error);
      throw new DatabaseError(error.message);
    }
    throw error;
  }
};


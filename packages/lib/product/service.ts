import "server-only";
import { Prisma } from "@prisma/client";
import { cache as reactCache } from "react";

import { prisma } from "@cowk8s/database";
import { ZId } from "@cowk8s/types/environment";
import { DatabaseError, ValidationError } from "@cowk8s/types/errors";
import type { TProduct } from "@cowk8s/types/product";
import { cache } from "../cache";
import { validateInputs } from "../utils/validate";
import { productCache } from "./cache";

const selectProduct = {
  id: true,
  createdAt: true,
  updatedAt: true,
  name: true,
};

export const getProductByEnvironmentId = reactCache(
  (environmentId: string): Promise<TProduct | null> =>
    cache(
      async () => {
        validateInputs([environmentId, ZId]);

        let productPrisma;

        try {
          productPrisma = await prisma.product.findFirst({
            where: {
              environments: {
                some: {
                  id: environmentId,
                },
              },
            },
            select: selectProduct,
          });

          return productPrisma;
        } catch (error) {
          if (error instanceof Prisma.PrismaClientKnownRequestError) {
            console.error(error);
            throw new DatabaseError(error.message);
          }
          throw error;
        }
      },
      [`getProductByEnvironmentId-${environmentId}`],
      {
        tags: [productCache.tag.byEnvironmentId(environmentId)],
      }
    )()
);

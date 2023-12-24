import { Prisma } from "@prisma/client";

import { prisma } from "@cowk8s/database";

export const createAccount = async (accountData: TAccountInput): Promise<TAccount> => {

  try {
    const account = await prisma.create({
      data: accountData,
    });
    return account;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      throw new DatabaseError(error.message);
    }

    throw error;
  }
};

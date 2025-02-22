import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

// Disconnect Prisma client when done
export const disconnectPrisma = async () => {
  await prisma.$disconnect();
};

export const getAllActivityService = async () => {
  try {
    const result = await prisma.activity.findMany();
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

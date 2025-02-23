const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Disconnect Prisma client when done
const disconnectPrisma = async () => {
  await prisma.$disconnect();
};

const getAllActivityService = async () => {
  try {
    const result = await prisma.activity.findMany();
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

const createActivityService = async (data) => {
  try {
    const result = await prisma.activity.create({
      data: {
        name: data.name,
      },
    });
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  disconnectPrisma,
  getAllActivityService,
  createActivityService,
};

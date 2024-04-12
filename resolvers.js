const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    allUsers: async () => {
      try {
        const users = await prisma.user.findMany();
        return users;
      } catch (error) {
        throw new Error(`Failed to fetch all users: ${error.message}`);
      }
    },
  },
  Mutation: {
    create: async (_, { username, movieId, rating }) => {
      try {
        const newUser = await prisma.user.create({
          data: {
            username,
            movieId,
            rating,
          },
        });
        return newUser;
      } catch (error) {
        throw new Error(`Failed to create user: ${error.message}`);
      }
    },
  },
};

module.exports = { resolvers };

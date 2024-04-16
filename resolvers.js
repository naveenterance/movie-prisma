const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    allUsers: async () => {
      try {
        const users = await prisma.user.findMany();
        return users;
      } catch (error) {
        console.error("Error fetching all users:", error);
        throw new Error(`Failed to fetch all users: ${error.message}`);
      }
    },
  },
  Mutation: {
    create: async (_, { username, movieId, rating, review }) => {
      try {
        const newUser = await prisma.user.create({
          data: {
            username,
            movieId,
            rating,
            review,
          },
        });
        return newUser;
      } catch (error) {
        console.error("Error creating user:", error);
        throw new Error(`Failed to create user: ${error.message}`);
      }
    },
  },
};

module.exports = { resolvers };

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
    createUser: async (_, { username, movieId, rating, review }) => {
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
    deleteUser: async (_, { username, movieId }) => {
      try {
        const deletedUser = await prisma.user.deleteMany({
          where: {
            username,
            movieId,
          },
        });
        return deletedUser;
      } catch (error) {
        console.error("Error deleting user:", error);
        throw new Error(`Failed to delete user: ${error.message}`);
      }
    },
    updateRatingAndReview: async (_, { username, movieId, rating, review }) => {
      try {
        const updatedUser = await prisma.user.updateMany({
          where: {
            username,
            movieId,
          },
          data: {
            rating,
            review,
          },
        });
        return updatedUser;
      } catch (error) {
        console.error("Error updating user:", error);
        throw new Error(`Failed to update user: ${error.message}`);
      }
    },
  },
};

module.exports = { resolvers };

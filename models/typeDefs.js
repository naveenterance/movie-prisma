const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    allUsers: [User!]!
  }

  type User {
    id: ID
    username: String
    movieId: String
    rating: String
    review: String
  }

  type Mutation {
    createUser(
      username: String!
      movieId: String!
      rating: String!
      review: String!
    ): User
    deleteUser(username: String!, movieId: String!): User
    updateRatingAndReview(
      username: String!
      movieId: String!
      rating: String!
      review: String!
    ): User
  }
`;

module.exports = { typeDefs };

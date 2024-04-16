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
    create(
      username: String!
      movieId: String!
      rating: String!
      review: String!
    ): User
  }
`;

module.exports = { typeDefs };

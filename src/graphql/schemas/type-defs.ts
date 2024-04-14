import gql from "graphql-tag";

const typeDefs = gql`
  type User {
    id: Int!
    email: String!
    name: String!
    username: String!
  }

  type Query {
    users: [User!]!
  }
`;

export { typeDefs };

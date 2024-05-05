import { ApolloServer } from "@apollo/server";
import { typeDefs } from "./schemas/type-defs";
import { resolvers } from "./schemas/resolvers";

const graphqlServer: ApolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: (error: any) => {
    return {
      message: error.message,
      code: error.extensions?.code || "INTERNAL_SERVER_ERROR",
      status: error.extensions?.status || 500,
    };
  },
});

export default graphqlServer;

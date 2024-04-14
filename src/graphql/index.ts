import { ApolloServer } from "@apollo/server";
import { typeDefs } from "./schemas/type-defs";
import { resolvers } from "./schemas/resolvers";

const graphqlServer: ApolloServer = new ApolloServer({ typeDefs, resolvers });

export default graphqlServer;

import { startStandaloneServer } from "@apollo/server/standalone";
import express, { Express } from "express";
import dotenv from "dotenv";
import graphqlServer from "./graphql";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.listen(port, async () => {
  const { url } = await startStandaloneServer(graphqlServer);
  console.log(`🚀 Server ready at ${url}`);
});

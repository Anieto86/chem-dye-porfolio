const { ApolloServer } = require("apollo-server");

// const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const typeDefs = require("./schema");
// const resolvers = require("./resolver");
// const TrackAPI = require("./datasources/track-api");

dotenv.config();
// const app = express();

//conect DB
const mongoUrl = require("./key");
if (!mongoUrl) {
  throw new Error("You must provide a MongoLab URI");
}

mongoose
  .connect(mongoUrl, {
    TopologyDescription: true,
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch((error) => console.error("Mongo Connection Error", error));

//Servidor
const server = new ApolloServer({
  typeDefs,
  //resolvers,
  // dataSources: () => {
  //   return {
  //     trackAPI: new TrackAPI(),
  //   };
  // },
});

server.listen().then(({ url }) => {
  console.log(`
    🚀   Server ready at ${url}
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `);
});

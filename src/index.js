const { ApolloServer } = require("apollo-server");
const { v4 } = require("uuid");
const connectDb = require("./config/db");
const typeDefs = require("./types");
const resolvers = require("./resolvers");
const models = require("./models");

connectDb();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models },
  formatError: (error) => {
    const errId = v4();
    console.log("errId: ", errId);
    console.log(error.originalError);
    if (!error.originalError) {
      return error;
    }
    const data = error.extensions.exception.data;
    const code = error.extensions.exception.code || 500;
    const message = error.message;
    return {
      message,
      status: code,
      data,
      errId,
    };
  },
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

const { ApolloError } = require("apollo-server");
const validator = require("validator");

module.exports = async (_, { input }, { models }) => {
  const errors = [];
  if (validator.isEmpty(input.id)) {
    errors.push({ message: "id should be Not empty!" });
  }
  if (errors.length > 0) {
    const error = new Error("Invalid input.");
    error.data = errors;
    error.code = 422;
    throw error;
  }
  try {
    user = await models.User.findById(input.id);
    return user;
  } catch (e) {
    throw new ApolloError(e);
  }
};

const { ApolloError } = require("apollo-server");
const validator = require("validator");
const bcrypt = require('bcryptjs');

module.exports = async (_, { input }, { models }) => {
  const errors = [];
  if (validator.isEmpty(input.dateCreated)) {
    errors.push({ message: "dateCreated should be a Date!" });
  }
  if (
    validator.isEmpty(input.password) ||
    !validator.isLength(input.password, { min: 5 })
  ) {
    errors.push({ message: "Password too short!" });
  }
  if (validator.isEmpty(input.userID)) {
    errors.push({ message: "userID should be not empty" });
  }
  if (errors.length > 0) {
    const error = new Error("Invalid input.");
    error.data = errors;
    error.code = 422;
    throw error;
  }
  try {
    const hashedPw = await bcrypt.hash(input.password, 12);
    const user = new models.User({
        dateCreated: input.dateCreated,
        userID: input.userID,
        password: hashedPw
    });
    const result = await user.save();
    return result;
  } catch (e) {
    throw new ApolloError(e);
  }
};

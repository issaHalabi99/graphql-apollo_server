const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  PFM: {
    enrolled: {
      type: Boolean,
      default: false,
    },
  },
  Fitness: {
    enrolled: {
      type: Boolean,
      default: false,
    },
  },
  dateCreated: {
    type: Date,
    required: true,
  },
  isDemo: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  isToken: {
    type: Boolean,
    default: false,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
  },
  companyId: {
    type: String,
  },
  company: {
    type: String,
  },
  userID: {
    type: String,
    required: true,
  },
  lastLogin: Date,
  info: {
    type: String,
  },
  currentMonth: {
    type: Number,
    default: 0,
  },
  needFix: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("user", userSchema);

module.exports = { User };

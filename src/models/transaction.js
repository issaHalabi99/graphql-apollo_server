const mongoose = require("mongoose");
const { Schema } = mongoose;

const transactionSchema = new Schema({
  modified: {
    type: Boolean,
    default: false,
  },
  isSplit: {
    type: Boolean,
    default: false,
  },
  isChild: {
    type: Boolean,
    default: false,
  },
  cashTransaction: {
    type: Boolean,
    default: false,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  transactionRef: {
    type: String,
  },
  uniqueRef: {
    type: String,
  },
  account: {
    type: String,
    required: true
  },
  transactionCurrency: {
    type: String,
  },
  transactionDate: {
    type: Date,
  },
  transactionValueDate: {
    type: String,
  },
  transactionDescription: {
    type: String,
  },
  transactionAmount: {
    type: String,
    required: true
  },
  transactionMCC: {
    type: String,
  },
  transactionAccount: {
    type: String,
  },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = { Transaction };

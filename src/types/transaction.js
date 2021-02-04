const { gql } = require("apollo-server");

module.exports = gql`

  type Transaction {
    modified: Boolean
    isSplit: Boolean
    isChild: Boolean
    cashTransaction: Boolean
    user: ID!
    transactionRef: String
    uniqueRef: String
    account: String!
    transactionCurrency: String
    transactionDate: String
    transactionValueDate: String
    transactionDescription: String
    transactionAmount: String!
    transactionMCC: String
    transactionAccount: String
  }

  type Query {
    transactions: [Transaction!]!
  }
`;
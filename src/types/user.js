const { gql } = require('apollo-server');

module.exports = gql`

  type PFM {
    enrolled: Boolean
  }
  type Fitness {
    enrolled: Boolean
  }
  
  type User {
    PFM: PFM
    Fitness: Fitness
    dateCreated: String
    isDemo: Boolean
    isActive: Boolean
    isToken: Boolean
    username: String
    password: String
    role: String
    companyId: String
    company: String
    userID: String
    lastLogin: String
    info: String
    currentMonth: String
    needFix: Boolean
  }

  input getUser{
    id: ID!
  }

  input createUser {
    dateCreated: String!
    password: String!
    userID: String!
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    getUser(input: getUser! ): User!
    createUser(input: createUser!): User!
  }
`;

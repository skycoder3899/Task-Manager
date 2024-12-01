const { gql } = require('apollo-server');

module.exports = gql`
  type Task {
    id: ID!
    title: String!
    description: String
    assignedTo: [String]!
    dueDate: String!
    priority: Int
  }

  type Query {
    getTask(id: ID!): Task
    getTasks: [Task!]!
  }

  type Mutation {
    createTask(title: String!, description: String, assignedTo: [String]!, dueDate: String!): Task
    updateTask(id: ID!, title: String, description: String, assignedTo: [String], dueDate: String): Task
    deleteTask(id: ID!): Boolean
    login(username: String!, password: String!): String
    logout: Boolean
  }
`;

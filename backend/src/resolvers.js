const { v4: uuidv4 } = require('uuid');
const taskManager = require('./taskManager');
const sessionManager = require('./sessionManager');
const { calculatePriority } = require('./priorityAlgorithm');

module.exports = {
  Query: {
    getTask: (_, { id }, { user }) => {
      sessionManager.validateSession(user);
      return taskManager.getTask(id);
    },
    getTasks: (_, __, { user }) => {
      sessionManager.validateSession(user);
      return taskManager.getAllTasks().map(task => ({
        ...task,
        priority: calculatePriority(task),
      })).sort((a, b) => b.priority - a.priority);
    },
  },
  Mutation: {
    createTask: (_, { title, description, assignedTo, dueDate }, { user }) => {
      sessionManager.validateSession(user);
      return taskManager.createTask({ id: uuidv4(), title, description, assignedTo, dueDate });
    },
    updateTask: (_, { id, ...updates }, { user }) => {
      sessionManager.validateSession(user);
      return taskManager.updateTask(id, updates);
    },
    deleteTask: (_, { id }, { user }) => {
      sessionManager.validateSession(user);
      return taskManager.deleteTask(id);
    },
    login: (_, { username, password }) => sessionManager.login(username, password),
    logout: (_, __, { user }) => sessionManager.logout(user),
  },
};

export const LOGIN_MUTATION = `
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password)
  }
`;

export const LOGOUT_MUTATION = `
  mutation {
    logout
  }
`;

export const CREATE_TASK = `
  mutation CreateTask($title: String!, $description: String!, $assignedTo: [String!]!, $dueDate: String!) {
    createTask(title: $title, description: $description, assignedTo: $assignedTo, dueDate: $dueDate) {
      id
      title
      description
      assignedTo
      dueDate
    }
  }
`;

export const UPDATE_TASK = `
  mutation UpdateTask($id: ID!, $title: String, $description: String, $assignedTo: [String!]!, $dueDate: String!) {
    updateTask(id: $id, title: $title, description: $description assignedTo: $assignedTo, dueDate: $dueDate) {
      id
      title
      description
      assignedTo
      dueDate
    }
  }
`;

export const DELETE_TASK = `
  mutation DeleteTask($id: ID!) {
    deleteTask(id: $id)
  }
`;

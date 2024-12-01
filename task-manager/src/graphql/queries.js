export const GET_TASK = `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      title
      description
      assignedTo
      dueDate
    }
  }
`;

export const GET_TASKS = `
  query {
    getTasks {
      id
      title
      description
      assignedTo
      dueDate
    }
  }
`;

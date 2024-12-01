// src/api/TaskAPI.js
import { GET_TASKS,GET_TASK } from '../graphql/queries';
import { CREATE_TASK,UPDATE_TASK,DELETE_TASK } from '../graphql/mutations';

export class TaskAPI {
    constructor(token) {
      this.token = token;
      this.baseUrl = 'http://localhost:4000';
    }
  
    async request(query, variables = {}) {
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: this.token,
        },
        body: JSON.stringify({ query, variables }),
      });
  
      const data = await response.json();
      return data;
    }
  
    async getTasks() {
      const data = await this.request(GET_TASKS);
      return data?.data?.getTasks || [];
    }
  
    async createTask(title, description, assignedTo, dueDate) {
      const variables = {
        title,
        description,
        assignedTo: assignedTo.split(',').map((user) => user.trim()),
        dueDate,
      };
      const data = await this.request(CREATE_TASK, variables);
      return data?.data?.createTask;
    }
  
    async updateTask(id, title, description, assignedTo, dueDate) {
      const variables = {
        id,
        title,
        description,
        assignedTo: assignedTo.split(',').map((user) => user.trim()),
        dueDate,
      };
      const data = await this.request(UPDATE_TASK, variables);
      return data?.data?.updateTask;
    }
  
    async deleteTask(id) {
      const query = `
        mutation DeleteTask($id: ID!) {
          deleteTask(id: $id)
        }
      `;
      const variables = { id };
      const data = await this.request(DELETE_TASK, variables);
      return data?.data?.deleteTask;
    }
  }
  
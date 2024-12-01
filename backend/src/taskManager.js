const tasks = [];

module.exports = {
  createTask: (task) => {
    tasks.push(task);
    return task;
  },
  getTask: (id) => tasks.find(task => task.id === id),
  getAllTasks: () => tasks,
  updateTask: (id, updates) => {
    const task = tasks.find(task => task.id === id);
    if (!task) throw new Error('Task not found');
    Object.assign(task, updates);
    return task;
  },
  deleteTask: (id) => {
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) return false;
    tasks.splice(index, 1);
    return true;
  },
};

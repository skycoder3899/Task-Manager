module.exports = {
    calculatePriority: (task) => {
      const dueDate = new Date(task.dueDate);
      const now = new Date();
      const daysToDue = (dueDate - now) / (1000 * 60 * 60 * 24);
  
      let priority = 0;
      if (daysToDue <= 7) priority += 10; 
      if (task.assignedTo.length > 1) priority += 5; 
      if (task.description && task.description.length > 100) priority -= 3; 
  
      return priority;
    },
  };
  
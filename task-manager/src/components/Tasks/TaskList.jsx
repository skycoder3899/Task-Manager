// src/components/Tasks/TaskList.js
import { useEffect, useState } from 'react';
import { TaskAPI } from '../../Services/TaskAPI';
import TaskCard from './TaskCard';
import TaskForm from './TaskForm';

const TaskList = ({ token }) => {
  const [tasks, setTasks] = useState([]);
  const taskAPI = new TaskAPI(token);

  useEffect(() => {
    const fetchTasks = async () => {
      const fetchedTasks = await taskAPI.getTasks();
      setTasks(fetchedTasks);
    };

    fetchTasks();
  }, [token]);

  return (
    <div className="p-4 flex">
      <div className="flex-shrink-0 w-full sm:w-1/3 lg:w-1/4 mr-4">
        <TaskForm token={token} taskAPI={taskAPI} setTasks={setTasks} />
      </div>
      <div className="flex-1">
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} taskAPI={taskAPI} setTasks={setTasks} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;

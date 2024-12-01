// src/components/Tasks/TaskCard.js
import { useState } from 'react';

const TaskCard = ({ task, taskAPI, setTasks }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [assignedTo, setAssignedTo] = useState(task.assignedTo.join(', '));
  const [dueDate, setDueDate] = useState(task.dueDate);
  const [error, setError] = useState('');


  const handleDelete = async () => {
    await taskAPI.deleteTask(task.id);
    const tasks = await taskAPI.getTasks();
    setTasks(tasks); // Refresh task list
  };

  const handleUpdate = async () => {
    if (!title || !description || !assignedTo || !dueDate) {
      setError('All fields are required.');
      return;
    }
    setError('');
    const updatedTask = await taskAPI.updateTask(task.id, title, description, assignedTo, dueDate);
    if (updatedTask) {
      const tasks = await taskAPI.getTasks();
      setTasks(tasks);
      setIsEditing(false);
    }
  };

  return (
    <div className="p-4 border rounded shadow-md bg-white">
      {isEditing ? (
        <>
        {error && <p className="text-red-500 mb-4">{error}</p>}
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mb-2 p-2 border rounded"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full mb-2 p-2 border rounded"
          />
          <input
            type="text"
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
            className="w-full mb-2 p-2 border rounded"
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full mb-4 p-2 border rounded"
          />
        </>
      ) : (
        <>
          <h4 className="text-xl font-bold">{task.title}</h4>
          <p className="text-sm text-gray-600">{task.description}</p>
          <p className="text-sm text-gray-600">Assigned to: {task.assignedTo.join(', ')}</p>
          <p className="text-sm text-gray-600">Due Date: {task.dueDate}</p>
        </>
      )}
      <div className="mt-4 flex justify-between">
        {isEditing ? (
          <button
            onClick={handleUpdate}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          >
            Edit
          </button>
        )}
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;

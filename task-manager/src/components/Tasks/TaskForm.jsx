import { useState } from 'react';

const TaskForm = ({ token, taskAPI, setTasks }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !assignedTo || !dueDate) {
      setError('All fields are required.');
      return;
    }

    setError('');
    const newTask = await taskAPI.createTask(title, description, assignedTo, dueDate);
    if (newTask) {
      const tasks = await taskAPI.getTasks();
      setTasks(tasks); 
      setTitle('');
      setDescription('');
      setAssignedTo('');
      setDueDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded shadow-md">
      <h3 className="text-lg font-bold mb-4">Create Task</h3>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Assigned To (comma-separated)"
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
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Create Task
      </button>
    </form>
  );
};

export default TaskForm;

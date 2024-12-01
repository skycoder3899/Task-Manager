import TaskList from '../components/Tasks/TaskList';
import LogoutButton from '../components/Auth/LogoutButton';

const Dashboard = () => {
  const token = localStorage.getItem('token');
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Task Manager</h1>
        <LogoutButton />
      </header>
      <TaskList token={token} />
    </div>
  );
};

export default Dashboard;

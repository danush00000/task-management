import { useEffect, useState } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import Navbar from '../Components/Navbar';

const socket = io('http://localhost:5000');

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const token = localStorage.getItem('token');

  const fetchTasks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/tasks', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addTask = async () => {
    if (!title) return;
    try {
      await axios.post(
        'http://localhost:5000/api/tasks',
        { title },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTitle('');
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTasks();
    socket.on('task-updated', fetchTasks);
    return () => socket.off('task-updated');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <Navbar />
      <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Dashboard
        </h2>
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Add new task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <button
            onClick={addTask}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
          >
            Add
          </button>
        </div>
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task._id}
              className="flex items-center justify-between bg-blue-50 rounded-lg px-4 py-3 shadow-sm hover:bg-blue-100 transition"
            >
              <span className="text-gray-800">{task.title}</span>
              {/* You can add more task actions here */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;




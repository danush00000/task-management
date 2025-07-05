import React, { useState } from 'react';

const TaskForm = ({ onTaskCreated }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    });
    if (res.ok) {
      setTitle('');
      onTaskCreated();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task title"
        className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none"
        required
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;

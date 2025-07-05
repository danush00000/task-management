import React from "react";

const TaskList = ({ tasks }) => (
  <div className="max-w-2xl mx-auto mt-8">
    <h2 className="text-2xl font-bold text-blue-700 mb-4">Your Tasks</h2>
    <ul className="space-y-4">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="bg-white rounded-lg shadow p-4 flex items-center justify-between hover:bg-blue-50 transition"
        >
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
            <p className="text-gray-500">{task.description}</p>
          </div>
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              task.completed
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {task.completed ? "Completed" : "Pending"}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export default TaskList;

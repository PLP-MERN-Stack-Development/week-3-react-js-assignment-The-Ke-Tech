import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [text, setText] = useState('');
  const [filter, setFilter] = useState('All');

  const addTask = () => {
    if (!text.trim()) return;
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
    setText('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(t => {
    if (filter === 'Active') return !t.completed;
    if (filter === 'Completed') return t.completed;
    return true;
  });

  return (
    <div className="w-full max-w-3xl mx-auto p-6 sm:p-8 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg transition-all">
      <h2 className="text-4xl font-extrabold text-center mb-8 text-purple-700 dark:text-purple-300">
        Task Manager
      </h2>

      {/* Input + Add button */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 p-3 rounded-lg border border-purple-300 dark:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          onClick={addTask}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-md transition-all"
        >
          Add Task
        </button>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center sm:justify-start mb-6">
        {['All', 'Active', 'Completed'].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === f
                ? 'bg-purple-600 text-white shadow'
                : 'bg-white dark:bg-gray-700 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-600 hover:bg-purple-100 dark:hover:bg-gray-600'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Task List */}
      <ul className="space-y-3">
        {filteredTasks.map(task => (
          <li
            key={task.id}
            className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded-xl border border-purple-200 dark:border-gray-700 transition-all group"
          >
            <span
              onClick={() => toggleTask(task.id)}
              className={`cursor-pointer sm:text-lg transition-all ${
                task.completed ? 'line-through text-gray-400' : 'text-gray-800 dark:text-white'
              }`}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 text-xl font-bold opacity-70 hover:opacity-100 transition"
              title="Delete task"
            >
              ✕
            </button>
          </li>
        ))}
        {filteredTasks.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-6 italic">
            No tasks to display.
          </p>
        )}
      </ul>
    </div>
  );
}

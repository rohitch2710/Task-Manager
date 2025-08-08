import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- for redirect
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate(); // <-- hook for navigation
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState('All');

  // Logout handler
  const handleLogout = () => {
    // Clear token or session
    localStorage.removeItem('token'); // or sessionStorage.removeItem('token')
    // Redirect to login page
    navigate('/login');
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'All') return true;
    return task.status === filter;
  });

  const handleCreateOrUpdate = () => {
    if (!title.trim() || !description.trim()) return;

    const now = new Date().toLocaleString();

    if (editingTask) {
      const updated = tasks.map(task =>
        task.id === editingTask.id
          ? { ...task, title, description, updated_at: now }
          : task
      );
      setTasks(updated);
      setEditingTask(null);
    } else {
      const newTask = {
        id: Date.now(),
        title,
        description,
        status: 'Pending',
        created_at: now,
        updated_at: now,
      };
      setTasks([...tasks, newTask]);
    }

    setTitle('');
    setDescription('');
  };

  const handleEdit = (task) => {
    setTitle(task.title);
    setDescription(task.description);
    setEditingTask(task);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleStatus = (id) => {
    setTasks(tasks.map(task =>
      task.id === id
        ? {
            ...task,
            status: task.status === 'Pending' ? 'Completed' : 'Pending',
            updated_at: new Date().toLocaleString()
          }
        : task
    ));
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome to Your Dashboard 👋</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <p className="subtext">Manage your tasks easily here.</p>

      <div className="form">
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        ></textarea>
        <button onClick={handleCreateOrUpdate}>
          {editingTask ? 'Update Task' : 'Create Task'}
        </button>
      </div>

      <div className="filters">
        {['All', 'Pending', 'Completed'].map((status) => (
          <button
            key={status}
            className={filter === status ? 'active-filter' : ''}
            onClick={() => setFilter(status)}
          >
            {status}
          </button>
        ))}
      </div>

      <table className="task-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Created</th>
            <th>Updated</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map(task => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>
                <span
                  className={`badge ${task.status === 'Completed' ? 'completed' : 'pending'}`}
                  onClick={() => toggleStatus(task.id)}
                >
                  {task.status}
                </span>
              </td>
              <td>{task.created_at}</td>
              <td>{task.updated_at}</td>
              <td>
                <button onClick={() => handleEdit(task)}>✏️</button>
                <button onClick={() => handleDelete(task.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;

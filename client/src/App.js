import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [editText, setEditText] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/tasks');
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async () => {
    if (newTask.trim()) {
      try {
        const response = await fetch('http://localhost:5000/api/tasks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title: newTask }),
        });
        const data = await response.json();
        setTasks([...tasks, data]);
        setNewTask('');
      } catch (error) {
        console.error('Error adding task:', error);
      }
    }
  };

  const deleteTask = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/tasks/${id}`, {
        method: 'DELETE',
      });
      setTasks(tasks.filter(task => task._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const updateTask = async (id, updatedTask) => {
    try {
      const response = await fetch(`http://localhost:5000/api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTask),
      });
      const data = await response.json();
      setTasks(tasks.map(task => task._id === id ? data : task));
      setEditingTask(null);
      setEditText('');
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const startEditing = (task) => {
    setEditingTask(task._id);
    setEditText(task.title);
  };

  const toggleComplete = async (task) => {
    updateTask(task._id, { ...task, completed: !task.completed });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
      </header>
      <main className="App-main">
        <div className="add-task">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task"
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
          />
          <button onClick={addTask}>Add Task</button>
        </div>
        <ul className="task-list">
          {tasks.map(task => (
            <li key={task._id} className={`task-item ${task.completed ? 'completed' : ''}`}>
              {editingTask === task._id ? (
                <div className="edit-task">
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && updateTask(task._id, { ...task, title: editText })}
                  />
                  <button onClick={() => updateTask(task._id, { ...task, title: editText })}>Save</button>
                  <button onClick={() => setEditingTask(null)}>Cancel</button>
                </div>
              ) : (
                <div className="task-content">
                  <span onClick={() => toggleComplete(task)} className="task-title">
                    {task.title}
                  </span>
                  <div className="task-actions">
                    <button onClick={() => startEditing(task)}>Edit</button>
                    <button onClick={() => deleteTask(task._id)}>Delete</button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;

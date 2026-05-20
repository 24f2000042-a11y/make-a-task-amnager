import React, { useEffect, useState } from 'react';
import axios from './api';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get('/tasks');
      setTasks(response.data);
    };
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Task Manager</h1>
      <ul>
        {tasks.map(task => <li key={task._id}>{task.title}</li>)}
      </ul>
    </div>
  );
}

export default App;
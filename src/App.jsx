// src/App.jsx or src/main.jsx
import './index.css';
import About from './pages/About';
import Home from './pages/Home';
import TaskPage from './pages/TaskPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/tasks/:id" element={<TaskPage />} />
        <Route path="/tasks/:id/edit" element={<TaskPage />} />
        <Route path="/tasks/:id/delete" element={<TaskPage />} />
        <Route path="/tasks/:id/complete" element={<TaskPage />} />
        <Route path="/tasks/:id/duplicate" element={<TaskPage />} />
        {/* Add more pages here */}
      </Routes>
    </Router>
  );
}

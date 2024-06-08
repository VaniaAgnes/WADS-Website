import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import History from './pages/History';
import Ongoing from './pages/Ongoing';
import Upcoming from './pages/Upcoming';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/history" element={<History />} />
        <Route path="/ongoing" element={<Ongoing />} />
        <Route path="/upcoming" element={<Upcoming />} />
      </Routes>
    </Router>
  );
};

export default App;

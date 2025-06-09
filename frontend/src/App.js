// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Login from './Pages/Login';
import LandingPage from './Pages/LandingPage';  // Import the landing page component

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />        {/* Home route */}
          <Route path="/login" element={<Login />} />
          {/* Add more routes like Signup, About, etc. here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

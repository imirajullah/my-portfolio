import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Logout from './components/Logout/Logout';
import Login from './components/Login/Login';

const Main = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('loggedIn') === 'true'
  );

  // Check localStorage if changed elsewhere (optional)
  useEffect(() => {
    const handleStorage = () => {
      setIsAuthenticated(localStorage.getItem('loggedIn') === 'true');
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const handleLogin = () => {
    localStorage.setItem('loggedIn', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      {/* ✅ Show Navbar only if authenticated */}
      {isAuthenticated && <Navbar />}

      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        {/* Protected Routes */}
        {isAuthenticated ? (
          <>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
          </>
        ) : (
          // Redirect all other routes to login if not logged in
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
};

export default Main;


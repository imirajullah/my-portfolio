import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Logout from './components/Logout/Logout';
import Login from './components/Login/Login';

const isAuthenticated = () => {
  return localStorage.getItem('loggedIn') === 'true';
};

const Main = () => {
  return (
    <Router>
      {isAuthenticated() && <Navbar />}

      <Routes>
        {/* Login route is public */}
        <Route path="/login" element={<Login />} />

        {/* Protected routes */}
        {isAuthenticated() ? (
          <>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<Logout />} />
          </>
        ) : (
          // If not logged in, redirect all other routes to login
          <Route path="/login" element={<Login onLogin={() => {
  localStorage.setItem('loggedIn', 'true');
  return <Navigate to="/dashboard" />;
}} />} />

        )}
      </Routes>
    </Router>
  );
};

export default Main;


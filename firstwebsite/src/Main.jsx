import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Logout from './components/Logout/Logout';
import Login from './components/Login/Login';

const Main = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('loggedIn') === 'true');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-theme', darkMode);
  }, [darkMode]);

  const handleLogin = () => {
    localStorage.setItem('loggedIn', 'true');
    setIsAuth(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    setIsAuth(false);
  };

  return (
    <Router>
      {isAuth && <Navbar />}

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          position: 'fixed',
          top: '10px',
          right: isAuth ? '110px' : '10px',
          zIndex: 9999,
          backgroundColor: 'var(--button-bg)',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '8px 12px',
          cursor: 'pointer',
        }}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      <Routes>
        <Route path="/login" element={!isAuth ? <Login onLogin={handleLogin} /> : <Navigate to="/dashboard" />} />

        {isAuth ? (
          <>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
};

export default Main;

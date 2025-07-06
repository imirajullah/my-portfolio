import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Login from './components/Login/Login.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // This function will be passed to Login and called on successful login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <Navbar />
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;

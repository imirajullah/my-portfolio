import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './logout.css';

const Logout = ({ onLogout }) => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('loggedIn');
    if (onLogout) onLogout(); // ✅ Notify Main to update state
    navigate('/login');
  }, [navigate, onLogout]);

  return <h2>Logging out...</h2>;
};

export default Logout;


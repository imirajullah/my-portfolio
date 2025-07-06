import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './logout.css';


const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('loggedIn');
    navigate('/login');
  }, [navigate]);

  return <h2>Logging out...</h2>;
};

export default Logout;

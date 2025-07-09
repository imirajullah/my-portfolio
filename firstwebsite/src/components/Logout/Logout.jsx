import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const Logout = ({ onLogout }) => {
  useEffect(() => {
    localStorage.removeItem('loggedIn');
    if (onLogout) onLogout();
  }, [onLogout]);

  return <Navigate to="/login" replace />;
};

export default Logout;

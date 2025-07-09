import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <div className="navbar-left">
          <li className="navbar-item"><Link to="/dashboard">Dashboard</Link></li>
          <li className="navbar-item"><Link to="/profile">Profile</Link></li>
          <li className="navbar-item"><Link to="/settings">Settings</Link></li>
        </div>
        <div className="navbar-right">
          <li className="navbar-item"><Link to="/logout">Logout</Link></li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;



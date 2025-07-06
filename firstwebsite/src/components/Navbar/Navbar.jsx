import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item"><Link to="/dashboard">Dashboard</Link></li>
        <li className="navbar-item"><Link to="/profile">Profile</Link></li>
        <li className="navbar-item"><Link to="/settings">Settings</Link></li>
        <li className="navbar-item logout"><Link to="/logout">Logout</Link></li> {/* 🔥 Add logout class */}
      </ul>
    </nav>
  );
};

export default Navbar;


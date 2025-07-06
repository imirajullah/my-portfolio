import React from 'react';
import './navbar.css';
import logo from '../img/img1.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <ul className="navbar-menu">
        <li className="navbar-item">Dashboard</li>
        <li className="navbar-item">Profile</li>
        <li className="navbar-item">Settings</li>
        <li className="navbar-item">Logout</li>
      </ul>
    </nav>
  );
};

export default Navbar;
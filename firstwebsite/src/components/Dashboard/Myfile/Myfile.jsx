import React from 'react';
import './myfile.css';
import bgImage from '../../img/miraj.png';

const Myfile = () => {
  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="hero-overlay">
        <h1>Hello, I'm Miraj</h1>
        <p>I'm a web developer and designer. Welcome to my portfolio!</p>
        <button className="hero-btn">View My Work</button>
      </div>
    </div>
  );
};

export default Myfile;
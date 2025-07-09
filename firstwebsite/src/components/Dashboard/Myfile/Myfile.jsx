import React from 'react';
import './myfile.css';
import bgImage from '../../img/miraj.jpg';

const Myfile = () => {
  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="hero-overlay" data-aos="fade-up">
        <h1>Hello, I'm Miraj</h1>
        <p>I'm a web developer and designer. Welcome to my portfolio!</p>
        <a href="#projects" className="hero-btn">View My Work</a>
      </div>
    </div>
  );
};

export default Myfile;

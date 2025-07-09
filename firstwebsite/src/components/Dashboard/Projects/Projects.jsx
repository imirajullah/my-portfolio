import React from 'react';
import './projects.css';

const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project-card" data-aos="fade-right">
          <h3>Hospital Management System</h3>
          <p>A web app to manage patient records, appointments, and billing. Built with HTML, CSS, JS, and SQL.</p>
        </div>

        <div className="project-card" data-aos="fade-up">
          <h3>Arbitrage Product Tracker</h3>
          <p>A React & Node.js based app to find price differences across e-commerce websites using web scraping.</p>
        </div>

        <div className="project-card" data-aos="fade-left">
          <h3>Portfolio Website</h3>
          <p>A responsive personal website built with React to showcase my skills, projects, and contact info.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;



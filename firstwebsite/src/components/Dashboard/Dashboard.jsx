import React from 'react';
import Myfile from './Myfile/Myfile.jsx';
import Overview from './Overview/Overview.jsx';
import Projects from './Projects/Projects.jsx';
import Skills from './Skills/Skills.jsx';
import Contact from './Contact/Contact.jsx';
import './dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      
      {/* 🔹 Top Navigation Links */}
      <div className="dashboard-headers">
        <h2><a href="#overview">Overview</a></h2>
        <h2><a href="#projects">Projects</a></h2>
        <h2><a href="#skills">Skills</a></h2>
        <h2><a href="#contact">Contact</a></h2>
      </div>

      {/* 🔹 Hero Image Section */}
      <Myfile />

      {/* 🔹 Overview AFTER image */}
      <section id="overview">
        <Overview />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}


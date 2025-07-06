import React from 'react';
import Myfile from './Myfile/Myfile.jsx';
import './dashboard.css';

export default function Dashboard() {
    return (
        <div className="dashboard-container">
            {/* Four headers at the top */}
            <div className="dashboard-headers">
                <h2>Overview</h2>
                <h2>Projects</h2>
                <h2>Skills</h2>
                <h2>Contact</h2>
            </div>
            <Myfile />
            {/* Add more dashboard content below if needed */}
        </div>
    );
}
import React from 'react';
import Myfile from './Myfile/Myfile.jsx';
import './dashboard.css';

export default function Dashboard() {
    return (
        <div className="dashboard-container">
            <Myfile />
            {/* Add more dashboard content below if needed */}
        </div>
    );
}
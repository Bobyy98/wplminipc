// src/pages/Wip.js

import React from "react";
import { Link } from 'react-router-dom';
import './Wip.css';

const WorkInProgress = () => {
    return (
        <div className="work-in-progress-container">
        <div className="wip-background">
                <div className="progress-page">
                    <h2>Work In Progress</h2>
                    <p>We're working hard to bring you new and exciting features. Stay tuned for updates!</p>
                    <p>Return to <Link to="/" className="home-link">Home</Link>.</p>
                </div>
        </div>
        </div>
    )
}

export default WorkInProgress;
import React from 'react';
import './projects.css';
import LovelyProjectCard from './LovelyProjectCard.js';

export default function Projects({ language }) {
    return (
        <div className="project-cards-container">
            <LovelyProjectCard language={language} />
        </div>
    )
}

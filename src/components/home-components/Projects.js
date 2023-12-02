import React from 'react';
import './projects.css';
import LovelyProjectCard from './LovelyProjectCard.js';
import ALSProjectCard from './ALSProjectCard.js';

export default function Projects({ language, setCurrentPage }) {
    return (
        <div className="project-cards-container">
            <LovelyProjectCard language={language} setCurrentPage={setCurrentPage} />
            <ALSProjectCard language={language} setCurrentPage={setCurrentPage} />
        </div>
    )
}

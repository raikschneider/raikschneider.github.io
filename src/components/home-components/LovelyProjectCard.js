import React from 'react';
import './lovely-project-card.css';
import screenshot from './../../images/a9bf1ec5b984e8348ae5cb5cb72f5cf1.png'

export default function LovelyProjectCard() {
    return (
        <div className="project-card-container">
            <div className="project-card-description-container">
                <h3>Lovely Manager</h3>
                <span><p>FULL-STACK APPLICATION</p><p>|</p><p>2023</p></span>
                <p>Designing and developing a cross-plattform application for a local frame manufacturer.</p>
                <button>Zum Projekt</button>
            </div>
            <div className="project-card-image-container">
                <img src={screenshot} alt="screenshot of project" />
            </div>
        </div>
    )
}

import React from 'react';
import './lovely-project-card.css';
import lovelyStrings from './lovelyProjectCardStrings.js';
import screenshot from './../../images/a9bf1ec5b984e8348ae5cb5cb72f5cf1.jpg'

export default function LovelyProjectCard({ language }) {
    return (
        <div className="project-card-container">
            <div className="project-card-description-container">
                <h3>Lovely Manager</h3>
                <span><p>{`${lovelyStrings[language.key].lovelyH3}`}</p><p>|</p><p>2023</p></span>
                <p>{`${lovelyStrings[language.key].lovelyDescription}`}</p>
                <button>{`${lovelyStrings[language.key].lovelyButton}`}</button>
            </div>
            <div className="project-card-image-container">
                <img src={screenshot} alt="screenshot of project" />
            </div>
        </div>
    )
}

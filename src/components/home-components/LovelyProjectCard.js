import React from 'react';
import './lovely-project-card.css';
import buttonStrings from './buttonStrings.js';
import LM_DE from './../../images/carbonLM_DE.png';
import LM_EN from './../../images/carbonLM_EN.png';

export default function LovelyProjectCard({ language, switchPage, toggleDropshadow }) {
    return (
        <div className="project-card-image-container" onClick={() => switchPage('LovelyProject')} onMouseEnter={() => toggleDropshadow(document.querySelector('#LMimg'))} onMouseLeave={() => toggleDropshadow(document.querySelector('#LMimg'))}>
            <img src={language.key === 'de' ? LM_DE : LM_EN} alt="code snippet of project" id="LMimg" />
            <button onClick={() => switchPage('LovelyProject')}>{`${buttonStrings[language.key].projectButton}`}</button>
        </div>

    )
}

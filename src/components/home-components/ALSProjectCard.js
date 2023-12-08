import React from 'react';
import buttonStrings from './buttonStrings.js';
import ALS_DE from './../../images/carbonALS_DE.png';
import ALS_EN from './../../images/carbonALS_EN.png';

export default function ALSProjectCard({ language, setCurrentPage, toggleDropshadow }) {
  return (
    <div className="project-card-image-container" onClick={() => setCurrentPage('ALSProject')} onMouseEnter={() => toggleDropshadow(document.querySelector('#ALSimg'))} onMouseLeave={() => toggleDropshadow(document.querySelector('#ALSimg'))}>
            <img src={language.key === 'de' ? ALS_DE : ALS_EN} alt="code snippet of project" id="ALSimg" />
            <button onClick={() => setCurrentPage('ALSProject')}>{`${buttonStrings[language.key].projectButton}`}</button>
        </div>
  )
}

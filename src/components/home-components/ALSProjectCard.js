import React from 'react';
import buttonStrings from './buttonStrings.js';
import ALS_DE from './../../images/carbonALS_DE.png';
import ALS_EN from './../../images/carbonALS_EN.png';

export default function ALSProjectCard({ language, setCurrentPage }) {
  return (
    <div className="project-card-image-container">
            <img src={language.key === 'de' ? ALS_DE : ALS_EN} alt="code snippet of project" />
            <button onClick={() => setCurrentPage('ALSProject')}>{`${buttonStrings[language.key].projectButton}`}</button>
        </div>
  )
}

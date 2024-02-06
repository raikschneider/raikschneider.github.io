import React from 'react';
import buttonStrings from './buttonStrings.js';
import ALS_DE from './../../images/carbonALS_DE.png';
import ALS_EN from './../../images/carbonALS_EN.png';

export default function ALSProjectCard({ language, switchPage, toggleDropshadow }) {

  const alsURL = 'https://awhoulongboardschool.com'

  // page switch is ignored if visitor clicks on live website button link

  const checkClick = (e) => {
    if (e.target.tagName === 'BUTTON') return
    switchPage('ALSProject')
  }
  return (
    <div className="project-card-image-container" onClick={(e) => checkClick(e)} onMouseEnter={() => toggleDropshadow(document.querySelector('#ALSimg'))} onMouseLeave={() => toggleDropshadow(document.querySelector('#ALSimg'))}>
      <img src={language.key === 'de' ? ALS_DE : ALS_EN} alt="code snippet of project" id="ALSimg" />
      <div className="project-card-button-container">
        <button onClick={() => switchPage('ALSProject')}>{`${buttonStrings[language.key].projectButton}`}</button>
        <button onClick={() => window.open(alsURL, '_blank')}>{`${buttonStrings[language.key].websiteButton}`}</button>
      </div>
    </div>
  )
}

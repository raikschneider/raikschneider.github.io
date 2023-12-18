import React from 'react';
import alsProjectStrings from './alsProjectStrings.js';
import Locale from './../images/Locale_Video.mp4';

export default function ALSProject({ language }) {
  return (
    <div className="project-container">
      <div className="project-paragraph-container">
        <h3>{`${alsProjectStrings[language.key].alsH1}`}</h3>
        <p>{`${alsProjectStrings[language.key].alsP1}`}</p>
        <div className="project-images">
        </div>
      </div>
      <div className="project-paragraph-container">
        <h3>{`${alsProjectStrings[language.key].alsH2}`}</h3>
        <p>{`${alsProjectStrings[language.key].alsP2}`}</p>
        <div className="project-images">
        </div>
      </div>
      <div className="project-paragraph-container">
        <h3>{`${alsProjectStrings[language.key].alsH3}`}</h3>
        <p>{`${alsProjectStrings[language.key].alsP3}`}</p>
        <div className="video-container">
          <video autoPlay loop muted >
            <source src={Locale} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  )
}

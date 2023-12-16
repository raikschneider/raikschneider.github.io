import React from 'react';
import alsProjectStrings from './alsProjectStrings.js';

export default function ALSProject({ language }) {
  return (
    <div className="project-container">
      <div className="project-paragraph-container">
        <h3>{`${alsProjectStrings[language.key].alsH1}`}</h3>
        <p>{`${alsProjectStrings[language.key].alsP1}`}</p>
        <div className="project-images">
        </div>
      </div>
    </div>
  )
}

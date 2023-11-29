import React from 'react';
import './technologies.css';
import technologyStrings from './technologyStrings.js';

export default function Technologies({ language }) {
  return (
    <div className="technologies-container">
        <h2>{`${technologyStrings[language.key].technologyH2}`}</h2>
        <div className="technologies-images-container"></div>
    </div>
  )
}

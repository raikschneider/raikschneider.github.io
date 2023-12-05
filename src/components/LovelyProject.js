import React from 'react';
import './lovely-project.css';
import lovelyProjectStrings from './lovelyProjectStrings.js';

export default function LovelyProject({ language }) {
  return (
    <div className="project-container">
      <h2>Lovely Manager</h2>
      <p>{`${lovelyProjectStrings[language.key].lovelyP1}`}</p>
    </div>
  )
}

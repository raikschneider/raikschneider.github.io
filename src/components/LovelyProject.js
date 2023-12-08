import React from 'react';
import './lovely-project.css';
import lovelyProjectStrings from './lovelyProjectStrings.js';

export default function LovelyProject({ language }) {
  return (
    <div className="project-container">
      <h2>Lovely Manager</h2>
      <p>{`${lovelyProjectStrings[language.key].lovelyP1}`}</p>
      <p>{`${lovelyProjectStrings[language.key].lovelyP2}`}</p>
      <p>{`${lovelyProjectStrings[language.key].lovelyP3}`}</p>
      <p>{`${lovelyProjectStrings[language.key].lovelyP4}`}</p>
      <p>{`${lovelyProjectStrings[language.key].lovelyP5}`}</p>
      <p>{`${lovelyProjectStrings[language.key].lovelyP6}`}</p>
    </div>
  )
}

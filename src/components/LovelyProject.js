import React from 'react';
import './lovely-project.css';
import lovelyProjectStrings from './lovelyProjectStrings.js';
import MainWindowScreen from './../images/Main_Window_Screenshot1.png';
import Dropdown from './../images/Dropdown_Video.mp4';

export default function LovelyProject({ language }) {
  return (
    <div className="project-container">
      {/* <h2>Lovely Manager</h2> */}
      <div className="project-paragraph-container">
        <h3>{`${lovelyProjectStrings[language.key].lovelyH1}`}</h3>
        <p>{`${lovelyProjectStrings[language.key].lovelyP1}`}</p>
        <div className="project-images">
          <img src={MainWindowScreen}></img>
        </div>
      </div>
      <div className="project-paragraph-container">
        <h3>{`${lovelyProjectStrings[language.key].lovelyH2}`}</h3>
        <p>{`${lovelyProjectStrings[language.key].lovelyP2}`}</p>
        <div className="video-container">
          <video autoPlay loop muted >
            <source src={Dropdown} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="project-paragraph-container">
        <h3>{`${lovelyProjectStrings[language.key].lovelyH3}`}</h3>
        <p>{`${lovelyProjectStrings[language.key].lovelyP3}`}</p>
        <div className="project-images"></div>
      </div>
      <div className="project-paragraph-container">
        <h3>{`${lovelyProjectStrings[language.key].lovelyH4}`}</h3>
        <p>{`${lovelyProjectStrings[language.key].lovelyP4}`}</p>
        <div className="project-images"></div>
      </div>
      <div className="project-paragraph-container">
        <h3>{`${lovelyProjectStrings[language.key].lovelyH5}`}</h3>
        <p>{`${lovelyProjectStrings[language.key].lovelyP5}`}</p>
        <div className="project-images"></div>
      </div>
      <div className="project-paragraph-container">
        <h3>{`${lovelyProjectStrings[language.key].lovelyH6}`}</h3>
        <p>{`${lovelyProjectStrings[language.key].lovelyP6}`}</p>
        <div className="project-images"></div>
      </div>
    </div>
  )
}

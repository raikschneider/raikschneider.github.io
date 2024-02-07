import React, { useEffect } from 'react';
import './lovely-project.css';
import lovelyProjectStrings from './lovelyProjectStrings.js';
import MainWindowScreen from './../images/Main_Window_Screenshot2.png';
import ModificationInterface from './../images/Modification_Interface2.mp4';
import LovelyCover from './../images/lovely-cover.jpg';
import Dropdown from './../images/Dropdown_Video2.mp4';
import Teile from './../images/Teile_Video.mp4';
import laufzettel2 from './../images/laufzettel2.jpg';

// PICTURES WIDER THAN PARAGRAPHS PLEASE

export default function LovelyProject({ language }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="project-container">
      {/* <h2>Lovely Manager</h2> */}
      <div className="project-cover-container">
        <img src={LovelyCover} alt='rack displaying finished frames' />
        <div className="project-details-container">
          <div className="project-details-header-container">
            <h1>LOVELY MANAGER</h1>
            <p>2021 - 2024</p>
          </div>
          <div className="project-brief-container">
            <h3>{`${lovelyProjectStrings[language.key].lovelyH1}`}</h3>
            <p>{`${lovelyProjectStrings[language.key].lovelyP1}`}</p>
          </div>
          <div className="project-details-tech-container">
            <h1>TECHNOLOGIES USED</h1>Electron | React | Node.js</div>
        </div>
      </div>
      <div className="project-premise-container">
        <p>{`${lovelyProjectStrings[language.key].lovelyPremise}`}</p>
      </div>
      <div className="project-paragraph-container">
        <div className="project-images">
          <img src={MainWindowScreen} alt='app main form interface screenshot'></img>
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
        <div className="video-container">
          <video autoPlay loop muted >
            <source src={ModificationInterface} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="project-paragraph-container">
        <h3>{`${lovelyProjectStrings[language.key].lovelyH4}`}</h3>
        <p>{`${lovelyProjectStrings[language.key].lovelyP4}`}</p>
        <div className="project-images"></div>
      </div>
      <div className="project-paragraph-container">
        <h3>{`${lovelyProjectStrings[language.key].lovelyH5}`}</h3>
        <p>{`${lovelyProjectStrings[language.key].lovelyP5}`}</p>
        <div className="video-container">
          <video autoPlay loop muted >
            <source src={Teile} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="project-paragraph-container">
        <h3>{`${lovelyProjectStrings[language.key].lovelyH6}`}</h3>
        <p>{`${lovelyProjectStrings[language.key].lovelyP6}`}</p>
        <div className="project-images"></div>
      </div>
      <div className="project-summary-container">
        <h3>{`${lovelyProjectStrings[language.key].lovelyH7}`}</h3>
        <p>{`${lovelyProjectStrings[language.key].lovelyP7}`}</p>
        <div className="project-images"></div>
      </div>
    </div>
  )
}

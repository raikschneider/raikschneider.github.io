import React  from 'react';
import alsProjectStrings from './alsProjectStrings.js';
import Locale from './../images/Locale_Video.mp4';
import ALSCover from './../images/ALS_Profile.png';

export default function ALSProject({ language }) {
  return (
    <div className="project-container">
      <div className="project-cover-container">
        <img src={ALSCover} alt='rack displaying finished frames' />
        <div className="project-details-container">
          <div className="project-details-header-container">
            <h1>AWHOU! LONGBOARD SCHOOL</h1>
            <p>2022</p>
          </div>
          <div className="project-brief-container">
            <h3>{`${alsProjectStrings[language.key].alsH1}`}</h3>
            <p>{`${alsProjectStrings[language.key].alsP1}`}</p>
          </div>
          <div className="project-details-tech-container">
            <h1>TECHNOLOGIES USED</h1>React | CSS</div>
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

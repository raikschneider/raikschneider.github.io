import React from 'react';
import manaliso1 from './../images/manaliso1.jpg'
import './about.css'
import aboutStrings from './aboutStrings.js';

export default function About({ language, setCurrentPage }) {

    return (
        <div className="about-container">
            <div className="about-images-container">
                <img src={manaliso1} alt="man on a bike with surfboard"></img>
            </div>
            <div className="about-paragraphs-container">
                <h1>{`${aboutStrings[language.key].aboutH1}`}</h1>
                <p>{`${aboutStrings[language.key].aboutP1}`}</p>
                <p>{`${aboutStrings[language.key].aboutP2}`}</p>
                <p>{`${aboutStrings[language.key].aboutP3}`}</p>
                <p>{`${aboutStrings[language.key].aboutP4}`}</p>
            </div>
        </div>
    )
}

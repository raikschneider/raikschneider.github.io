import React from 'react';
import manaliso1 from './../images/manaliso1.jpg'
import june1 from './../images/june1.jpg'
import climbing2 from './../images/climbing2.jpg'
import './about.css'
import aboutStrings from './aboutStrings.js';

export default function About({ language }) {
    return (
        <div className="about-container">
            <div className="about-images-container">
                <img src={june1} id="june" alt="hand of a baby"></img>
                <img src={manaliso1} id="manaliso" alt="man on a bike with surfboard"></img>
                <img src={climbing2} id="climbing" alt="climbing holds"></img>
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

import React from 'react';
import manaliso1 from './../images/manaliso1.jpg'
import june1 from './../images/june1.jpg'
import climbing2 from './../images/climbing2.jpg'
import './about.css'
import aboutStrings from './aboutStrings.js';


const altText = {
    de: {
        june: 'Hand eines Säuglings',
        manaliso: 'Ich mit Surfboard auf Fahrrad',
        climbing: 'Klettergriffe'
    },
    en: {
        june: 'hand of a baby',
        manaliso: 'me on a bike with surfboard',
        climbing: 'climbing holds'
    }
}
export default function About({ language }) {
    return (
        <div className="about-container">
            <div className="about-images-container">
                <img src={june1} id="june" alt={`${altText[language.key].june}`}></img>
                <img src={manaliso1} id="manaliso" alt={`${altText[language.key].manaliso}`}></img>
                <img src={climbing2} id="climbing" alt={`${altText[language.key].climbing}`}></img>
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

import React from 'react';
import './hero.css';
import heroStrings from './heroStrings.js';
import gpsIcon from './../../icons/gps-50.png';

export default function Hero({ language, setCurrentPage }) {
    return (
        <div className="hero-container">
            <h1>{`${heroStrings[language.key].heroH1}`}</h1>
            <span><img src={gpsIcon} alt="GPS Pin"></img><p>{`${heroStrings[language.key].heroLocation}`}</p></span>
            <p>{`${heroStrings[language.key].heroParagraph}`}</p>
        </div>
    )
}

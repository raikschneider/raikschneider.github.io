import React from 'react';
import './hero.css';
import heroStrings from './heroStrings.js';

export default function Hero({ language, setCurrentPage }) {
    return (
        <div className="hero-container">
            <h1>{`${heroStrings[language.key].heroH1}`}</h1>
            <p>{`${heroStrings[language.key].heroLocation}`}</p>
            <p>Lorem ipsum duis culpa do et ex ad est. Deserunt enim velit cupidatat laborum quis dolore officia mollit officia Lorem labore labore. Ex qui officia ipsum aliqua in pariatur magna. Sint fugiat ea occaecat <a href='javascript:void(0)' onClick={() => setCurrentPage('About')}>minim labore</a> ex et.</p>
        </div>
    )
}

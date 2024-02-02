import React from 'react';
import './nav.css';

const navStrings = {
    en: {
        homeDiv: 'Home',
        aboutDiv: 'About'
    },
    de: {
        homeDiv: 'Start',
        aboutDiv: 'Über mich'
    }
}

export default function Nav({ language, setLanguage, switchPage }) {

    const toggleSticky = () => {
        const navbar = document.querySelector('nav-container');
        const sticky = navbar.offsetTop;
        return window.pageYOffset >= sticky ? 'sticky' : null
    }
    const toggleLanguage = (lang) => {
        if (lang.key === 'de') {
            setLanguage({ key: 'en', string: 'DE' })
        } else {
            setLanguage({ key: 'de', string: 'EN' })
        }
    }
    return (
        <div className={`nav-container ${toggleSticky}`}>
            <div className="page-link-element" onClick={() => switchPage('Home')}>{`${navStrings[language.key].homeDiv}`}</div>
            <div className="page-link-element" onClick={() => switchPage('About')}>{`${navStrings[language.key].aboutDiv}`}</div>
            <div
                className="locale-toggle-container"
                onClick={() => toggleLanguage(language)}>
                {`${language.string}`}
            </div>
        </div>
    )
}

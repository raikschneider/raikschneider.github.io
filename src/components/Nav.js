import React from 'react';
import globe from './../icons/globe-50.png';
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

    const toggleMenu = () => {
        const hamburger = document.querySelector('.hamburger-menu')
        const nav = document.querySelector('.nav-element-container')
        hamburger.classList.toggle('active')
        nav.classList.toggle('active')
    }

    const removeClass = () => {
        const hamburger = document.querySelector('.hamburger-menu')
        const nav = document.querySelector('.nav-element-container')
        hamburger.classList.remove('active')
        nav.classList.remove('active')
    }


    return (
        <div className={`nav-container ${toggleSticky}`}>
            <div className="nav-element-container">
                <div className="page-link-element" onClick={() => { switchPage('Home'); removeClass() }}>{`${navStrings[language.key].homeDiv}`}</div>
                <div className="page-link-element" onClick={() => { switchPage('About'); removeClass() }}>{`${navStrings[language.key].aboutDiv}`}</div>
                <div
                    className="locale-toggle-container"
                    onClick={() => toggleLanguage(language)}>
                    <img src={globe} alt="globe icon" /><p>{`${language.string}`}</p>
                </div>
            </div>
            <div className="hamburger-menu" onClick={() => toggleMenu()}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </div>
    )
}

import React from 'react';
import './projects.css';
import LovelyProjectCard from './LovelyProjectCard.js';
import ALSProjectCard from './ALSProjectCard.js';

const projectsStrings = {
    en: {
        projectH2: "Projects"
    },
    de: {
        projectH2: "Projekte"
    }
}

export default function Projects({ language, switchPage }) {

    const toggleDropshadow = (el) => {
        el.classList.toggle('dropshadow')
    }

    return (
        <>
            <h2>{`${projectsStrings[language.key].projectH2}`}</h2>
            <div className="project-cards-container">

                <LovelyProjectCard language={language} switchPage={switchPage} toggleDropshadow={toggleDropshadow} />
                <ALSProjectCard language={language} switchPage={switchPage} toggleDropshadow={toggleDropshadow} />
            </div>
        </>

    )
}

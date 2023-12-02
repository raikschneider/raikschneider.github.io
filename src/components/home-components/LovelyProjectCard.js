import React from 'react';
import './lovely-project-card.css';
import buttonStrings from './buttonStrings.js';
import LM_DE from './../../images/carbonLM_DE.png';
import LM_EN from './../../images/carbonLM_EN.png';

export default function LovelyProjectCard({ language, setCurrentPage }) {
    return (
        //     <div className="project-card-container">
        //         <div className="project-card-description-container">
        //             <h3>Lovely Manager</h3>
        //             <span><p>{`${lovelyStrings[language.key].lovelyH3}`}</p><p>|</p><p>2023</p></span>
        //             {/* <p>{`${lovelyStrings[language.key].lovelyDescription}`}</p> */}
        //             <button>{`${lovelyStrings[language.key].lovelyButton}`}</button>
        //         </div>
        //         <div className="project-card-image-container">
        //             <img src={screenshot} alt="screenshot of project" />
        //         </div>
        //     </div>
        // )
        <div className="project-card-image-container">
            <img src={language.key === 'de' ? LM_DE : LM_EN} alt="code snippet of project" />
            <button onClick={() => setCurrentPage('LovelyProject')}>{`${buttonStrings[language.key].projectButton}`}</button>
        </div>

    )
}

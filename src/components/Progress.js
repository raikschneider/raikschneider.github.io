import React from 'react';
import './progress.css';
import arrow from './../icons/arrow-up-50.png';

export default function Progress() {
    let calcScrollValue = () => {
        const scrollProgressElement = document.querySelector('.progress-element');
        let pos = document.documentElement.scrollTop;
        let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrollValue = Math.round((pos * 100) / calcHeight);
        pos > 100 ? scrollProgressElement.style.display = 'grid' : scrollProgressElement.style.display = 'none'
        scrollProgressElement.style.background = `conic-gradient(rgba(25,144,168,1), ${scrollValue}%, rgba(76,76,147,1) ${scrollValue}%, rgba(94,94,99,1) ${scrollValue}%`;
    }

    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;
    return (
        <div className="progress-element" onClick={() => window.scrollTo(0, 0)}>
            <span className="progress-value"><img src={arrow} /></span>    
        </div>
    )
}

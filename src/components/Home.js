import React from 'react';
import Hero from './home-components/Hero.js'
import Technologies from './home-components/Technologies.js'
import Projects from './home-components/Projects.js'
import './home.css';

export default function Home({ language, switchPage }) {
  return (
    <div className="home-container">
      <Hero language={language} switchPage={switchPage} />
      <Technologies language={language} />
      <Projects language={language} switchPage={switchPage} />
    </div>
  )
}

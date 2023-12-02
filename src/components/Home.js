import React from 'react';
import Hero from './home-components/Hero.js'
import Technologies from './home-components/Technologies.js'
import Projects from './home-components/Projects.js'
import './home.css';

export default function Home({ language, setCurrentPage }) {
  return (
    <div className="home-container">
      <Hero language={language} setCurrentPage={setCurrentPage} />
      <Technologies language={language} />
      <Projects language={language} setCurrentPage={setCurrentPage} />
    </div>
  )
}

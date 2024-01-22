import React, { useState } from 'react';
import Nav from './components/Nav.js';
import Home from './components/Home.js';
import About from './components/About.js';
import LovelyProject from './components/LovelyProject.js';
import ALSProject from './components/ALSProject.js';
import Footer from './components/Footer.js';
import './App.css';

function App() {
  const [language, setLanguage] = useState({ key: 'de', string: 'EN' })
  const [currentPage, setCurrentPage] = useState('Home');

  const switchPage = (page) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }
  return (
    <div className="page-wrapper">
      <Nav
        language={language}
        setLanguage={setLanguage}
        switchPage={switchPage}
      />
      {currentPage === 'Home' ? <Home language={language} switchPage={switchPage} /> : null}
      {currentPage === 'About' ? <About language={language} switchPage={switchPage} /> : null}
      {currentPage === 'LovelyProject' ? <LovelyProject language={language} /> : null}
      {currentPage === 'ALSProject' ? <ALSProject language={language} /> : null}
      <Footer />
    </div>
  );
}

export default App;

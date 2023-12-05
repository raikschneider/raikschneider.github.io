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
  return (
    <div className="page-wrapper">
      <Nav
        language={language}
        setLanguage={setLanguage}
        setCurrentPage={setCurrentPage}
      />
      {currentPage === 'Home' ? <Home language={language} setCurrentPage={setCurrentPage} /> : null}
      {currentPage === 'About' ? <About language={language} setCurrentPage={setCurrentPage} /> : null}
      {currentPage === 'LovelyProject' ? <LovelyProject language={language} /> : null}
      {currentPage === 'ALSProject' ? <ALSProject /> : null}
      <Footer />
    </div>
  );
}

export default App;

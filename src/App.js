import React, { useState } from 'react';
import Home from './components/Home.js';
import About from './components/About.js';
import './App.css';

function App() {
  const [language, setLanguage] = useState({ key: 'de', string: 'EN' })
  const [currentPage, setCurrentPage] = useState('Home');
  return (
    <div className="page-wrapper">
      {currentPage === 'Home' ? <Home language={language} setCurrentPage={setCurrentPage} /> : null}
      {currentPage === 'About' ? <About language={language} setCurrentPage={setCurrentPage} /> : null}
    </div>
  );
}

export default App;

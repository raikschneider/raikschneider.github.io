import React, { useState } from 'react';
import Home from './components/Home.js';
import './App.css';

function App() {
  const [language, setLanguage] = useState({ key: 'de', string: 'EN'})
  return (
    <div className="page-wrapper">
      <Home language={language} />
    </div>
  );
}

export default App;

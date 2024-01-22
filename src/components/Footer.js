import React from 'react';
import './footer.css';

const footerStrings = {
  en: 'Copyright © 2024 Raik Schneider. All rights reserved.',
  de: 'Copyright © 2024 Raik Schneider. Alle Rechte vorbehalten.'
}

export default function Footer({ language }) {
  return (
    <div className="footer-container">{`${footerStrings[language.key]}`}</div>
  )
}

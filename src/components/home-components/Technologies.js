import React from 'react';
import './technologies.css';

const technologyStrings = {
  en: {
      technologyH2: `Technologies I'm familiar with`
  },
  de: {
      technologyH2: `Technologien, mit denen ich mich auskenne`
  }
}

export default function Technologies({ language }) {
  return (
    <div className="technologies-container">
        <h2>{`${technologyStrings[language.key].technologyH2}`}</h2>
        <div className="technologies-images-container"></div>
    </div>
  )
}

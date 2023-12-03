import React from 'react';
import './technologies.css';
import jsIcon from './../../icons/icons8-javascript.svg';
import expressIcon from './../../icons/icons8-express-js.svg';
import gitIcon from './../../icons/icons8-git.svg';
import reactIcon from './../../icons/icons8-react-native-68.png';
import nodeIcon from './../../icons/icons8-nodejs-48.png';


const technologyStrings = {
  en: {
    technologyH2: `Some of the technologies I'm familiar with`
  },
  de: {
    technologyH2: `Einige der Technologien, mit denen ich mich auskenne`
  }
}

export default function Technologies({ language }) {
  return (
    <div className="technologies-container">
      <h2>{`${technologyStrings[language.key].technologyH2}`}</h2>
      <div className="technologies-images-container">
        <div className="technologies-element-container">
          <img src={jsIcon}></img><p>Javascript</p>
        </div>
        <div className="technologies-element-container">
          <img src={reactIcon}></img><p>React</p>
        </div>
        <div className="technologies-element-container">
          <img src={expressIcon}></img><p>ExpressJS</p>
        </div>
        <div className="technologies-element-container">
          <img src={nodeIcon}></img><p>Node.js</p>
        </div>
        <div className="technologies-element-container">
          <img src={gitIcon}></img><p>Git</p>
        </div>
      </div>
    </div>
  )
}

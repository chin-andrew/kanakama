import React from 'react';

import { EModes } from '../types/mode';
import './mode-selector.css';

export default (onClick: Function) => {
  return (
    <div className="mode-selector">
      <div className='mode-text'>What would you like to practice?</div>
      <button className="mode-button" onClick={() => onClick(EModes.hiragana)}>Hiragana</button>
      <button className="mode-button" onClick={() => onClick(EModes.katakana)}>Katakana</button>
      <button className="mode-button" onClick={() => onClick(EModes.all)}>Hiragana and Katakana</button>
    </div>
  )
}
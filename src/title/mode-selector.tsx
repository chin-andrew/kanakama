import React from 'react';
import './mode-selector.css';

export default (onClick: Function) => {
  return (
    <div className="mode-selector">
      <div className='mode-text'>What would you like to practice?</div>
      <button className="mode-button" onClick={() => onClick('hiragana')}>Hiragana</button>
      <button className="mode-button" onClick={() => onClick('katakana')}>Katakana</button>
      <button className="mode-button" onClick={() => onClick('all')}>Hiragana and Katakana</button>
    </div>
  )
}
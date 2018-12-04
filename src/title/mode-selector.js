import React from 'react';

export default (onClick) => {
  return (
    <div>
      <div>What would you like to practice?</div>
      <button onClick={() => onClick('hiragana')}>Hiragana</button>
      <button onClick={() => onClick('katakana')}>Katakana</button>
      <button onClick={() => onClick('all')}>Hiragana and Katakana</button>
    </div>
  )
}
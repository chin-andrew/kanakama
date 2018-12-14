import React from 'react';
import modeSelector from './mode-selector';
import logo from './logo';
import './title.css';

export default (onClick: Function) => {
  return (
    <div className="title-container">
      {logo()}
      <div className='title'> ｋａｎａｋａｍａ </div>
      {modeSelector(onClick)}
    </div>
  )
}
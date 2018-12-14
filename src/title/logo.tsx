import React from 'react';
import fetchKanaImage from '../question/image';
import './logo.css';

export default () => {
  return (
    <div className="logo-container">
      {fetchKanaImage('./hiragana-ka.svg', 'logo-image')}
      {fetchKanaImage('./hiragana-na.svg', 'logo-image')}
      {fetchKanaImage('./hiragana-ka.svg', 'logo-image')}
      {fetchKanaImage('./hiragana-ma.svg', 'logo-image')}
    </div>
  )
}
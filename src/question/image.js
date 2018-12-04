import React from 'react';
import './image.css'

export default (imagePath) => {
  const reqSvgs = require.context ( '../images', true, /\.svg$/ )
  return <img className='kana-image' src={reqSvgs(imagePath)} />
}


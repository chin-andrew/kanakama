import React from 'react';
import './image.css'

export default (imagePath, className) => {
  const reqSvgs = require.context ( '../images', true, /\.svg$/ )
  return <img className={className} src={reqSvgs(imagePath)} />
}


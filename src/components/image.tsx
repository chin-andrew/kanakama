import React from 'react';

export default (imagePath: string, className: string) => {
  // @ts-ignore
  const reqSvgs = require.context ( '../images', true, /(\.svg)|(\.png)$/ )
  return <img className={className} src={reqSvgs(imagePath)} alt={''} />
}

import React from 'react';
import styled from 'styled-components';
import fetchKanaImage from '../components/image';
import './logo.css';

export const LogoContainer = styled.div`
  border: 4px solid black;
  margin: 16px;
  width: 150px;
`;

export default () => {
  return (
    <LogoContainer>
      {fetchKanaImage('./hiragana-ka.svg', 'logo-image')}
      {fetchKanaImage('./hiragana-na.svg', 'logo-image')}
      {fetchKanaImage('./hiragana-ka.svg', 'logo-image')}
      {fetchKanaImage('./hiragana-ma.svg', 'logo-image')}
    </LogoContainer>
  );
};

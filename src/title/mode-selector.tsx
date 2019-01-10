import React from 'react';
import styled from 'styled-components';

import { EModes } from '../types/mode';

const Button = styled.button`
  border: 2px solid black;
  background: none;
  cursor: pointer;
  font-size: 16px;
  letter-spacing: 0.3px;
  margin: 4px;
  outline: none;
  padding: 12px 40px;
  width: 200px;

  :hover {
    background-color: darkgrey;
  }

  :focus {
    background-color: lightgrey;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const Text = styled.span`
  margin-bottom: 8px;
`;

export default (onClick: (mode: EModes) => void ) => {
  return (
    <Container>
      <Text>What would you like to practice?</Text>
      <Button onClick={() => onClick(EModes.hiragana)}>Hiragana</Button>
      <Button onClick={() => onClick(EModes.katakana)}>Katakana</Button>
      <Button onClick={() => onClick(EModes.all)}>Hiragana and Katakana</Button>
    </Container>
  );
};

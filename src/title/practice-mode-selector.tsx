import React from 'react';
import styled from 'styled-components';

import { EModes } from '../types/mode';
import { EViews } from '../types/views';

import Button from '../components/button';

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

export default (setPracticeMode: (mode: EModes) => void, setView: (view: EViews) => void  ) => {
  const onClick = (mode: EModes) => {
    setPracticeMode(mode);
    setView(EViews.practice);
  };

  return (
    <Container id={'mode-container'}>
      <Text>What would you like to practice?</Text>
      <Button onClick={() => onClick(EModes.hiragana)}>Hiragana</Button>
      <Button onClick={() => onClick(EModes.katakana)}>Katakana</Button>
      <Button onClick={() => onClick(EModes.all)}>Hiragana and Katakana</Button>
    </Container>
  );
};

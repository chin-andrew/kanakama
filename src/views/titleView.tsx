import React from 'react';
import styled from 'styled-components';

import Container from '../components/viewContainer';
import { EModes } from '../types/mode';
import { EViews } from '../types/views';
import ViewSelector from '../title/viewSelector';
import logo from '../title/logo';

const Title = styled.span`
  align-self: center;
  font-size: 24px;
  margin: 16px;
`;

export default (setPracticeMode: (mode: EModes) => void, setView: (view: EViews) => void) => {
  return (
    <Container id={'title-container'}>
      {logo()}
      <Title> ｋａｎａｋａｍａ </Title>
      <ViewSelector setPracticeMode={setPracticeMode} setView={setView} />
    </Container>
  );
};

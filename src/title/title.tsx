import React from 'react';
import styled from 'styled-components';

import modeSelector from './mode-selector';
import logo from './logo';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center
`

const Title = styled.span`
  font-size: 24px;
  margin: 16px;
`

export default (onClick: Function) => {
  return (
    <Container id={'title-container'}>
      {logo()}
      <Title> ｋａｎａｋａｍａ </Title>
      {modeSelector(onClick)}
    </Container>
  )
}
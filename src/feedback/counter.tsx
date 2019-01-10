import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Column = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 16px;
  `;

const Text = styled.span`
  font-size: 20px;
`;

const Score = styled.span`
  font-size: 28px;
  font-weight: bold;
`;

export default (correct: number, incorrect: number) => {
  return (
    <Container id={'counter'}>
      <Column>
        <Text>Correct:</Text>
        <Score>{correct}</Score>
      </Column>
      <Column>
        <Text>Incorrect:</Text>
        <Score>{incorrect}</Score>
      </Column>
    </Container>
  );
};

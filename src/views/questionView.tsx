import React, { PureComponent } from 'react';
import styled, { keyframes } from 'styled-components';

import { EModes } from '../types/mode';
import Question from '../question/question';
import displayScore from '../feedback/counter';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Container = styled.div`
  animation: 500ms ${fadeIn} ease-in-out;
`

interface QuestionComopnentProps {
  mode: EModes,
}

interface QuestionComponentState {
  correct: number,
  incorrect: number,
}

export default class QuestionComponent extends PureComponent<QuestionComopnentProps, QuestionComponentState> {
  constructor(props: QuestionComopnentProps) {
    super(props);
    this.state = {
      correct: 0,
      incorrect: 0,
    }
  }

  incrementCorrect = () =>{
    this.setState({ correct: this.state.correct + 1 })
  }

  incrementIncorrect = () => {
    this.setState({ incorrect: this.state.incorrect + 1 })
  }

  render() {
    const { mode } = this.props;
    const { correct, incorrect } = this.state;

    return (
      <Container>
        <div> ｋａｎａｋａｍａ </div>
        <div> your kana companion </div>
        <Question
          incrementCorrect={this.incrementCorrect}
          incrementIncorrect={this.incrementIncorrect}
          mode={mode}
        />
        { displayScore(correct, incorrect) }
      </Container>
    )
  }
}
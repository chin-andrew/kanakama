import React, { PureComponent } from 'react';
import styled from 'styled-components';

import kana from '../kana'
import TKana from '../types/kana';

const Button = styled.button`
  background-color: white;
  border: 2px solid black;
  font-size: 16px;
  margin: 4px;
  outline: none;
  padding: 12px 0px;
  width: 120px;
  cursor: pointer;

  :hover {
    background-color: darkgray;
  }

  &.correct {
    cursor: default;
    background-color: yellowgreen;
  }
  
  &.incorrect {
    cursor: default;
    background-color: tomato;
  }
`

const NextButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

interface AnswerButtonsProps {
  buttonOptions: Array<number>,
  onClickCorrect: Function,
  onClickIncorrect: Function,
  selectedKana: TKana,
}

interface AnswerButtonsState {
  incorrectAnswer: string | null,
}

export default class AnswerButtons extends PureComponent<AnswerButtonsProps, AnswerButtonsState> {
  constructor(props: AnswerButtonsProps) {
    super(props)
    this.state = {
      incorrectAnswer: null,
    }
  }

  setIncorrectAnswer = (incorrectAnswer: string) => {
    this.setState({ incorrectAnswer });
  }

  onClickNext = () => {
    this.setState({ incorrectAnswer: null });
    this.props.onClickIncorrect();
  }

  render() {
    const {
      buttonOptions,
      onClickCorrect,
      selectedKana
    } = this.props;

    const { incorrectAnswer } = this.state;

    const correctButtonClassName = `${incorrectAnswer && 'correct'}`;
    const incorrectButtonClassName = `${incorrectAnswer && 'incorrect'}`;

    const buttons = [];
    for (const element in buttonOptions) {
      const currentKana = kana[buttonOptions[element]];
      const button = currentKana.name === selectedKana.name ?
        (
          <Button
            id={'answer-button'}
            className={correctButtonClassName}
            key={`button-${element}`}
            onClick={() => onClickCorrect()}>{currentKana.name}
          </Button>
        ) :
        (
          <Button
            id={'answer-button'}
            className={incorrectButtonClassName}
            key={`button-${element}`}
            onClick={() => this.setIncorrectAnswer(currentKana.name)}>{currentKana.name}
          </Button>
        );
      buttons.push(button);
    }

    return (
      <div>
        {buttons}
        <NextButtonContainer>
          {incorrectAnswer && <Button id={'next-button'} onClick={() => this.onClickNext()}>Next</Button>}
        </NextButtonContainer>
      </div>
    )
  }
}
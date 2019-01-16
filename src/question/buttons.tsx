import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Button from '../components/button';
import kana from '../kana';
import TKana, { ESystem } from '../types/kana';

const AnswerButton = styled(Button)`
  width: 120px;

  :disabled {
    color: black;
  }

  &.correct {
    cursor: default;
    background-color: yellowgreen;
  }

  &.incorrect {
    cursor: default;
    background-color: tomato;
  }
`;

const NextButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

interface AnswerButtonsProps {
  buttonOptions: number[];
  onClickCorrect: (id: string, system: ESystem) => void;
  onClickIncorrect: (id: string, system: ESystem) => void;
  selectedKana: TKana;
  system: ESystem;
}

interface AnswerButtonsState {
  incorrectAnswer: string | null;
}

export default class AnswerButtons extends PureComponent<AnswerButtonsProps, AnswerButtonsState> {
  constructor(props: AnswerButtonsProps) {
    super(props);
    this.state = {
      incorrectAnswer: null,
    };
  }

  setIncorrectAnswer = (incorrectAnswer: string) => {
    this.setState({ incorrectAnswer });
  }

  onClickNext = () => {
    const { selectedKana, system } = this.props;
    this.setState({ incorrectAnswer: null });
    this.props.onClickIncorrect(selectedKana.name, system);
  }

  render() {
    const {
      buttonOptions,
      onClickCorrect,
      selectedKana,
      system,
    } = this.props;

    const { incorrectAnswer } = this.state;

    const correctButtonClassName = `${incorrectAnswer && 'correct'}`;
    const incorrectButtonClassName = `${incorrectAnswer && 'incorrect'}`;

    const buttons = [];
    for (const element of buttonOptions) {
      const currentKana = kana[element];
      const button = currentKana.name === selectedKana.name ?
        (
          <AnswerButton
            id={'answer-button'}
            className={correctButtonClassName}
            disabled={!!incorrectAnswer}
            key={`button-${element}`}
            onClick={() => onClickCorrect(selectedKana.name, system)}
          >
            {currentKana.name}
          </AnswerButton>
        ) :
        (
          <AnswerButton
            id={'answer-button'}
            className={incorrectButtonClassName}
            disabled={!!incorrectAnswer}
            key={`button-${element}`}
            onClick={() => this.setIncorrectAnswer(currentKana.name)}
          >
            {currentKana.name}
          </AnswerButton>
        );
      buttons.push(button);
    }

    return (
      <div>
        {buttons}
        <NextButtonContainer>
          {incorrectAnswer && <AnswerButton id={'next-button'} onClick={() => this.onClickNext()}>Next</AnswerButton>}
        </NextButtonContainer>
      </div>
    );
  }
}

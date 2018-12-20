import React, { PureComponent } from 'react';
import kana from '../kana'
import TKana from '../types/kana';
import './buttons.css';

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

    const correctButtonClassName = `answer-button${incorrectAnswer ? '--correct' : ''}`;
    const incorrectButtonClassName = `answer-button${incorrectAnswer ? '--incorrect' : ''}`;

    const buttons = [];
    for (const element in buttonOptions) {
        const currentKana = kana[buttonOptions[element]];
        const button = currentKana.name === selectedKana.name ?
          <button
            className={correctButtonClassName}
            key={`button-${element}`}
            onClick={() => onClickCorrect()}>{currentKana.name}
          </button> :
          <button
          className={incorrectButtonClassName}
          key={`button-${element}`}
            onClick={() => this.setIncorrectAnswer(currentKana.name)}>{currentKana.name}
          </button>;
        buttons.push(button);
    }

    return (
      <div>
        {buttons}
        <div className={'next-button-container'}>
          {incorrectAnswer && <button className='answer-button' onClick={() => this.onClickNext()}>Next</button>}
        </div>
      </div>
    )
  }
}
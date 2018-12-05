import React, { PureComponent } from 'react';
import { insert } from 'ramda';
import { generateRandomNumber } from '../utils';
import kana from '../kana'
import './buttons.css';

export default class AnswerButtons extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      incorrectAnswer: undefined,
    }
  }

  setIncorrectAnswer = (incorrectAnswer) => {
    this.setState({ incorrectAnswer });
    // this.props.onClickIncorrect();
  }

  onClickNext = () => {
    this.setState({ incorrectAnswer: undefined });
    this.props.onClickIncorrect();
  }

  render() {
    const {
      buttonOptions,
      onClickCorrect,
      selectedKana
    } = this.props;

    const { incorrectAnswer } = this.state;

    const incorrectButtons = [];
    const correctButtonClassName = `answer-button${incorrectAnswer ? '--correct' : ''}`;
    const incorrectButtonClassName = `answer-button${incorrectAnswer ? '--incorrect' : ''}`;
    const correctButton = <button className={correctButtonClassName} onClick={() => onClickCorrect()}>{selectedKana.name}</button>
    for (const option in buttonOptions) {
      const button = <button className={incorrectButtonClassName} onClick={() => this.setIncorrectAnswer(kana[buttonOptions[option]].name)}>{kana[buttonOptions[option]].name}</button>
      incorrectButtons.push(button);
    }
    const buttons = insert(generateRandomNumber(0, 3))(correctButton)(incorrectButtons);
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
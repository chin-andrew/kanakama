import React, { PureComponent } from 'react';
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

    const correctButtonClassName = `answer-button${incorrectAnswer ? '--correct' : ''}`;
    const incorrectButtonClassName = `answer-button${incorrectAnswer ? '--incorrect' : ''}`;

    const buttons = [];
    for (const element in buttonOptions) {
        const currentKana = kana[buttonOptions[element]];
        const button = currentKana.name === selectedKana.name ?
          <button className={correctButtonClassName} onClick={() => onClickCorrect()}>{currentKana.name}</button> :
          <button className={incorrectButtonClassName} onClick={() => this.setIncorrectAnswer(currentKana.name)}>{currentKana.name}</button>;
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
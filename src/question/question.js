import React, { PureComponent } from 'react';
import { includes } from 'ramda';
import kana from '../kana'
import { generateRandomNumber } from '../utils';
import AnswerButtons from './buttons'
import fetchKanaImage from './image'
import './question.css'

export default class Question extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      buttonOptions: [],
      selectedKana: undefined,
    }
  }

  componentDidMount() {
    this.buildQuestion();
  }

  buildQuestion = () => {
    this.setState({ incorrectAnswer: undefined })
    const buttonOptions = [];
    while (buttonOptions.length < 3) {
      const randomNumber = generateRandomNumber(0, kana.length);
      if (!includes(randomNumber, buttonOptions)) {
        buttonOptions.push(randomNumber);
      }
    }
    const selectedKana = kana[buttonOptions[generateRandomNumber(0, 3)]];
    this.setState({ selectedKana, buttonOptions });
  }

  selectImage = () => {
    const { selectedKana } = this.state;

    switch (this.props.mode) {
      case 'hiragana':
        return selectedKana.hiraganaPath;
      case 'katakana':
        return selectedKana.katakanaPath;
      default:
        if (Math.random() < 0.5) {
          return selectedKana.hiraganaPath;
        } else {
          return selectedKana.katakanaPath;
        }
    }
  }

  onClickCorrect = () => {
    this.props.incrementCorrect();
    this.buildQuestion();
  }

  onClickIncorrect = () => {
    this.props.incrementIncorrect();
    this.buildQuestion();
  }

  render() {
    const { selectedKana, buttonOptions } = this.state;
    return (
      <div>
        {selectedKana &&
          (
            <div className='question'>
              {fetchKanaImage(this.selectImage(), 'kana-image')}
              <div className='question__buttons'>
                <AnswerButtons
                  buttonOptions={buttonOptions}
                  onClickCorrect={this.onClickCorrect}
                  onClickIncorrect={this.onClickIncorrect}
                  selectedKana={selectedKana}
                />
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

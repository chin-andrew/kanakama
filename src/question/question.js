import React, { Component } from 'react';
import { includes } from 'ramda';
import kana from '../kana'
import { generateRandomNumber } from '../utils';
import AnswerButtons from './buttons'
import fetchKanaImage from './image'
import './question.css'

export default class Question extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonOptions: [],
      selectedKana: undefined,
    }
  }

  componentDidMount() {
    this.selectKana();
  }

  selectKana = () => {
    // TODO: generate button order and pass down to prevent answer rearranging on rerender
    this.setState({ incorrectAnswer: undefined })
    const randomNumber = generateRandomNumber(0, kana.length);
    this.selectIncorrectAnswers(randomNumber);
    this.setState({ selectedKana: kana[randomNumber]});
  }

  selectIncorrectAnswers = (correctAnswer) => {
    const buttonOptions = [];
    while (buttonOptions.length < 2) {
      const randomNumber = generateRandomNumber(0, kana.length);
      if (randomNumber != correctAnswer && !includes(randomNumber, buttonOptions)) {
        buttonOptions.push(randomNumber);
      }
    }
    this.setState({ buttonOptions })
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
    this.selectKana();
  }

  onClickIncorrect = () => {
    this.props.incrementIncorrect();
    this.selectKana();
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

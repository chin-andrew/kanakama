import React, { Component } from 'react';
import kana from '../kana'
import { generateRandomNumber } from '../utils';
import generateAnswerButtons from './buttons'
import fetchKanaImage from './image'
import './question.css'

export default class Question extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedKana: undefined,
      incorrectAnswer: undefined,
    }
  }

  componentDidMount() {
    this.selectKana();
  }

  selectKana = () => {
    const randomNumber = generateRandomNumber(0, kana.length);
    this.setState({ selectedKana: kana[randomNumber]});
  }

  selectImage = () => {
    const { selectedKana } = this.state;

    switch (this.props.mode) {
      case 'hiragana':
        return selectedKana.hiraganaPath;
      case 'katakana':
        return selectedKana.katakanaPath;
      default:
        const random = Math.round(Math.random())
        if (random === 0) {
          return selectedKana.hiraganaPath;
        } else {
          return selectedKana.katakanaPath;
        }
    }
  }

  onClickCorrect = () => {
    this.props.incrementCorrect();
    this.selectKana();
    this.setState({ incorrectAnswer: undefined })
  }

  onClickIncorrect = () => {
    this.props.incrementIncorrect();
    this.setState({ incorrectAnswer: this.state.selectedKana})
  }

  render() {
    const { selectedKana, incorrectAnswer } = this.state;
    let renderContent = <div>loading</div>;
    if (selectedKana) {
      renderContent = (
        <div className='question'>
        {fetchKanaImage(this.selectImage(), 'kana-image')}
        <div className='question__buttons'>
          {generateAnswerButtons(selectedKana, this.onClickCorrect, this.onClickIncorrect, )}
        </div>
      </div>
      )
    }
    return (
      renderContent
    );
  }
}

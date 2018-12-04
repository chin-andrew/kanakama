import React, { Component } from 'react';
import { concat } from 'ramda';
import hiragana from '../hiragana'
import katakana from '../katakana'
import { generateRandomNumber } from '../utils';
import generateAnswerButtons from './buttons'
import fetchKanaImage from './image'
import './question.css'

export default class Question extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedKana: undefined,
    }
  }

  componentDidMount() {
    this.selectKana();
  }

  selectKana = () => {
    let list;
    switch (this.props.mode) {
      case 'hiragana':
        list = hiragana;
        break;
      case 'katakana':
        list = katakana;
        break;
      default:
        list = concat(hiragana, katakana);
        break;
    }
    const randomNumber = generateRandomNumber(0, list.length);
    this.setState({ selectedKana: list[randomNumber]});
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
    const { selectedKana } = this.state;
    let renderContent = <div>loading</div>;
    if (selectedKana) {
      renderContent = (
        <div className='question'>
        {fetchKanaImage(selectedKana.imgPath)}
        <div className='question__buttons'>
          {generateAnswerButtons(selectedKana, this.onClickCorrect, this.onClickIncorrect)}
        </div>
      </div>
      )
    }
    return (
      renderContent
    );
  }
}

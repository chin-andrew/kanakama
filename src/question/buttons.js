import React from 'react';
import { insert } from 'ramda';
import { generateRandomNumber } from '../utils';
import hiragana from '../hiragana'
import './buttons.css';

export default (selectedKana, onClickCorrect, onClickIncorrect) => {
    let selected;
    const options = [];
    const correctOption = <button className='answer-button' onClick={() => onClickCorrect()}>{selectedKana.name}</button>
    while (options.length < 2) {
      const randomNumber = generateRandomNumber(0, hiragana.length - 1);
      if (randomNumber !== selected) {
        if (hiragana[randomNumber].id !== selectedKana.id) {
          selected = randomNumber;
          const option = <button className='answer-button' onClick={() => onClickIncorrect()}>{hiragana[randomNumber].name}</button>
          options.push(option);
        }
      }
    }
    return insert(generateRandomNumber(0, 2))(correctOption)(options);
  }
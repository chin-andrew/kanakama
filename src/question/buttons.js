import React from 'react';
import { insert } from 'ramda';
import { generateRandomNumber } from '../utils';
import kana from '../kana'
import './buttons.css';

export default (selectedKana, onClickCorrect, onClickIncorrect) => {
    let selected;
    const options = [];
    const correctOption = <button className='answer-button' onClick={() => onClickCorrect()}>{selectedKana.name}</button>
    while (options.length < 2) {
      const randomNumber = generateRandomNumber(0, kana.length - 1);
      if (randomNumber !== selected) {
        if (kana[randomNumber].id !== selectedKana.id) {
          selected = randomNumber;
          const option = <button className='answer-button' onClick={() => onClickIncorrect()}>{kana[randomNumber].name}</button>
          options.push(option);
        }
      }
    }
    return insert(generateRandomNumber(0, 2))(correctOption)(options);
  }
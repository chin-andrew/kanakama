import React, { PureComponent } from 'react';
// @ts-ignore -- types library does not contain definition for ramda.includes
import { includes } from 'ramda';
import styled from 'styled-components';

import fetchKanaImage from '../components/image';
import kana from '../kana';
import TKana from '../types/kana';
import { EModes } from '../types/mode';
import { generateRandomNumber } from '../utils';
import AnswerButtons from './buttons';
import './question.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Responses = styled.div`
  margin-top: 20px;
`;

interface QuestionProps {
  incrementCorrect: () => void;
  incrementIncorrect: () => void;
  mode: EModes;
}

interface QuestionState {
  buttonOptions: number[];
  selectedKana: TKana | null;
}

export default class Question extends PureComponent<QuestionProps, QuestionState> {
  constructor(props: QuestionProps) {
    super(props);
    this.state = {
      buttonOptions: [],
      selectedKana: null,
    };
  }

  componentDidMount() {
    this.setQuestion();
  }

  setQuestion = () => {
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

  selectImage = (selectedKana: TKana) => {
    switch (this.props.mode) {
      case EModes.hiragana:
        return selectedKana.hiraganaPath;
      case EModes.katakana:
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
    this.setQuestion();
  }

  onClickIncorrect = () => {
    this.props.incrementIncorrect();
    this.setQuestion();
  }

  render() {
    const { selectedKana, buttonOptions } = this.state;

    return(
      <Container>
        {selectedKana && (
          <React.Fragment>
            {fetchKanaImage(this.selectImage(selectedKana), 'question-image')}
            <Responses>
              <AnswerButtons
                buttonOptions={buttonOptions}
                onClickCorrect={this.onClickCorrect}
                onClickIncorrect={this.onClickIncorrect}
                selectedKana={selectedKana}
              />
            </Responses>
          </React.Fragment>
        )}
      </Container>
    );
  }
}

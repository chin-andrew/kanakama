import React, { PureComponent } from 'react';
// @ts-ignore -- types library does not contain definition for ramda.includes
import { includes } from 'ramda';
import styled from 'styled-components';

import fetchKanaImage from '../components/image';
import kana from '../kana';
import TKana, { ESystem } from '../types/kana';
import { EModes } from '../types/mode';
import { generateRandomNumber } from '../utils';
import AnswerButtons from './buttons';
import './question.css';

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
`;

interface QuestionProps {
  incrementCorrect: (character: string, system: ESystem) => void;
  incrementIncorrect: (character: string, system: ESystem) => void;
  mode: EModes;
}

interface QuestionState {
  buttonOptions: number[];
  selectedKana: TKana | null;
  system: ESystem | null;
}

export default class Question extends PureComponent<QuestionProps, QuestionState> {
  constructor(props: QuestionProps) {
    super(props);
    this.state = {
      buttonOptions: [],
      selectedKana: null,
      system: null,
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
        this.setState({ system: ESystem.hiragana});
        return selectedKana.hiraganaPath;
        case EModes.katakana:
        this.setState({ system: ESystem.katakana});
        return selectedKana.katakanaPath;
        default:
        if (Math.random() < 0.5) {
          this.setState({ system: ESystem.hiragana});
          return selectedKana.hiraganaPath;
        } else {
          this.setState({ system: ESystem.katakana});
          return selectedKana.katakanaPath;
        }
    }
}

  onClickCorrect = (character: string, system: ESystem) => {
    this.props.incrementCorrect(character, system);
    this.setQuestion();
  }

  onClickIncorrect = (character: string, system: ESystem) => {
    this.props.incrementIncorrect(character, system);
    this.setQuestion();
  }

  render() {
    const { selectedKana, buttonOptions, system } = this.state;

    return(
      <QuestionContainer>
        {selectedKana && (
          <React.Fragment>
            {fetchKanaImage(this.selectImage(selectedKana), 'question-image')}
            {system &&
              <ButtonContainer>
                <AnswerButtons
                  buttonOptions={buttonOptions}
                  onClickCorrect={this.onClickCorrect}
                  onClickIncorrect={this.onClickIncorrect}
                  selectedKana={selectedKana}
                  system={system}
                />
              </ButtonContainer>
            }
          </React.Fragment>
        )}
      </QuestionContainer>
    );
  }
}

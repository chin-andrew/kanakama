import React, { PureComponent } from 'react';
import Question from '../question/question';
import displayScore from '../feedback/counter';

interface QuestionComopnentProps {
  mode: 'hiragana' | 'katakana' | 'all',
}

interface QuestionComponentState {
  correct: number,
  incorrect: number,
}

export default class QuestionComponent extends PureComponent<QuestionComopnentProps, QuestionComponentState> {

  incrementCorrect = () =>{
    this.setState({ correct: this.state.correct + 1 })
  }

  incrementIncorrect = () => {
    this.setState({ incorrect: this.state.incorrect + 1 })
  }

  render() {

    const { mode } = this.props;
    const { correct, incorrect } = this.state;

    return (
      <div>
        <div> ｋａｎａｋａｍａ </div>
        <div> your kana companion </div>
        <Question
          incrementCorrect={this.incrementCorrect}
          incrementIncorrect={this.incrementIncorrect}
          mode={mode}
        />
        { displayScore(correct, incorrect) }
      </div>
    )
  }
}
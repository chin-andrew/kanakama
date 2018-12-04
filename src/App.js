import React, { Component } from 'react';

import selectMode from './title/mode-selector'
import Question from './question/question';
import displayScore from './feedback/counter';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: undefined,
      correct: 0,
      incorrect: 0,
    }
  }

  setMode = (selectedMode) => {
    this.setState({ mode: selectedMode })
  }

  incrementCorrect = () =>{
    this.setState({ correct: this.state.correct + 1 })
  }

  incrementIncorrect = () => {
    this.setState({ incorrect: this.state.incorrect + 1 })
  }

  render() {
    const { correct, incorrect, mode } = this.state;

    let renderContent = selectMode(this.setMode)
    if (mode) {
      renderContent = (
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
      );
    }
    console.log(renderContent)
    return (
      renderContent
    );
  }
}

export default App;

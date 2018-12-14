import React, { Component } from 'react';

import displayScore from './feedback/counter';
import Question from './question/question';
import title from './title/title';
import './App.css';


class App extends Component<Object, any> {
  constructor(props: Object) {
    super(props);
    this.state = {
      mode: undefined,
      correct: 0,
      incorrect: 0,
    }
  }

  setMode = (selectedMode: string) => {
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
    return (
      <div>
        {mode === undefined ? 
          (title(this.setMode)) :
          (
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
      </div>
    );
  }
}

export default App;

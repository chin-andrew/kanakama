import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './images/hiragana-a.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        Hey
        <img src={'./images/hiragana-a.png'} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import renderTitle from './title/title';
import { EModes } from './types/mode'
import QuestionView from './views/questionView';
import './App.css';

interface AppProps {}
interface AppState {
  mode: EModes | null,
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      mode: null,
    }
  }

  setMode = (selectedMode: EModes) => {
    this.setState({ mode: selectedMode })
  }

  render() {
    const { mode } = this.state;
    return (
      <div>
        {mode === null ? 
          (renderTitle(this.setMode)) :
          (<QuestionView mode={mode} />)
        }
      </div>
    );
  }
}

export default App;

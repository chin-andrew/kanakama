import React, { Component } from 'react';
import styled from 'styled-components';

import renderTitle from './title/title';
import { EModes } from './types/mode';
import QuestionView from './views/questionView';

const Container = styled.div`
  margin: 12px;
`;

interface AppState {
  mode: EModes | null;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      mode: null,
    };
  }

  setMode = (selectedMode: EModes) => {
    this.setState({ mode: selectedMode });
  }

  render() {
    const { mode } = this.state;
    return (
      <Container>
        {mode === null ?
          (renderTitle(this.setMode)) :
          (<QuestionView mode={mode} />)
        }
      </Container>
    );
  }
}

export default App;

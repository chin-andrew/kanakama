import React, { Component } from 'react';
import styled from 'styled-components';

import { EModes } from './types/mode';
import { EViews } from './types/views';
import PracticeView from './views/practiceView';
import renderTitle from './views/titleView';
import ProfileView from './views/profileView';

const Container = styled.div`
  margin: 12px;
`;

interface AppState {
  view: EViews;
  practiceMode: EModes;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      practiceMode: EModes.all,
      view: EViews.title,
    };
  }

  setView = (selectedView: EViews) => {
    this.setState({ view: selectedView });
  }

  setPracticeMode = (selectedMode: EModes) => {
    this.setState({ practiceMode: selectedMode });
  }

  displayView = (view: EViews, practiceMode: EModes) => {
    switch (view) {
      case EViews.title:
        return renderTitle(this.setPracticeMode, this.setView);
      case EViews.practice:
        return <PracticeView mode={practiceMode} setView={this.setView} />;
      case EViews.profile:
        return <ProfileView setView={this.setView} />;
      default:
        return renderTitle(this.setPracticeMode, this.setView);
    }
  }

  render() {
    const { view, practiceMode } = this.state;
    return (
      <Container>
        {this.displayView(view, practiceMode)}
      </Container>
    );
  }
}

export default App;

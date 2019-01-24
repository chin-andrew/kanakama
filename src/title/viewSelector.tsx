import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { fadeIn } from '../components/animationKeyframes';
import Button from '../components/button';
import { EModes } from '../types/mode';
import { EViews } from '../types/views';

const Container = styled.div`
  animation: 500ms ${fadeIn} ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const Text = styled.span`
  margin-bottom: 8px;
`;

interface ViewSelectorProps {
  setPracticeMode: (mode: EModes) => void;
  setView: (view: EViews) => void;
}

interface ViewSelectorState {
  practice: boolean;
}

export default class ViewSelector extends PureComponent<ViewSelectorProps, ViewSelectorState> {
  constructor(props: ViewSelectorProps) {
    super(props);
    this.state = {
      practice: false,
    };
  }

  onClick = (mode: EModes) => {
    const { setPracticeMode, setView } = this.props;
    setPracticeMode(mode);
    setView(EViews.practice);
  }

  setPractice = () => {
    this.setState({ practice: !this.state.practice });
  }

  render() {
    const practiceModeButtons = (
      <React.Fragment>
        <Text>What would you like to practice?</Text>
        <Button onClick={() => this.onClick(EModes.hiragana)}>Hiragana</Button>
        <Button onClick={() => this.onClick(EModes.katakana)}>Katakana</Button>
        <Button onClick={() => this.onClick(EModes.all)}>Hiragana and Katakana</Button>
        <Button onClick={() => this.setPractice()}>Back</Button>
      </React.Fragment>
    );

    const viewButtons = (
      <React.Fragment>
        <Text>What would you like to do?</Text>
        <Button onClick={() => this.setPractice()}>Practice</Button>
        <Button onClick={() => this.props.setView(EViews.profile)}>View Stats</Button>
      </React.Fragment>
    );

    return (
      <Container id={'mode-container'}>
        {this.state.practice ? practiceModeButtons : viewButtons}
      </Container>
    );
  }
}

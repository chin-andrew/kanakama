import React, { PureComponent } from 'react';
import { isNil } from 'ramda';
import styled from 'styled-components';

import Button from '../components/button';
import Container from '../components/viewContainer';
import renderStats from '../stats/stats';
import { IUserStats } from '../types/stats';
import { EViews } from '../types/views';

const ClearButton = styled(Button)`
  :hover {
    background-color: tomato;
  }
`;

interface ProfileViewProps {
  setView: (view: EViews) => void;
}

interface ProfileViewState {
  stats: IUserStats | null;
}

export default class ProfileView extends PureComponent<ProfileViewProps, ProfileViewState> {
  constructor(props: ProfileViewProps) {
    super(props);
    const userStats = localStorage.getItem('userStats');
    this.state = {
      stats: isNil(userStats) ? null : JSON.parse(userStats),
    };
  }

  render() {
    const { setView } = this.props;
    const { stats } = this.state;

    return (
      <Container>
        {isNil(stats) ?
          (
            <div>We couldn't find any practice data to display. Do some practice first and then check back!</div>
          ) :
          (
            <React.Fragment>
              {renderStats(stats)}
              <ClearButton onClick={() => localStorage.clear()}>Erase My Practice Stats</ClearButton>
            </React.Fragment>
          )
        }
        <Button onClick={() => setView(EViews.title)}>Back to Main Screen</Button>
      </Container>
    );
  }
}

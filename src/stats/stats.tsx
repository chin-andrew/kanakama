import React, { PureComponent } from 'react';

import { ESystem } from '../types/kana';
import { IUserStats } from '../types/stats';
import buildStats from './buildStats';

interface StatsProps {
  stats: IUserStats;
}

interface StatsState {
  hiraganaOpen: boolean;
  katakanaOpen: boolean;
}

export default class Stats extends PureComponent<StatsProps, StatsState> {
  constructor(props: StatsProps) {
    super(props);
    this.state = {
      hiraganaOpen: false,
      katakanaOpen: false,
    };
  }

  toggleHiragana = () => {
    this.setState({ hiraganaOpen: !this.state.hiraganaOpen });
  }

  toggleKatakana = () => {
    this.setState({ katakanaOpen: !this.state.katakanaOpen });
  }

  render() {
    const { stats } = this.props;
    const { hiraganaOpen, katakanaOpen } = this.state;
    return (
      <React.Fragment>
        {buildStats(stats.hiragana, ESystem.hiragana, hiraganaOpen, this.toggleHiragana)}
        {buildStats(stats.katakana, ESystem.katakana, katakanaOpen, this.toggleKatakana)}
      </React.Fragment>
    );
  }
}

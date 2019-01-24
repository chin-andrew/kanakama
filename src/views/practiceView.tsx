import React, { PureComponent } from 'react';
import { isNil } from 'ramda';

import Button from '../components/button';
import Container from '../components/viewContainer';
import displayScore from '../feedback/counter';
import Question from '../question/question';
import { ESystem } from '../types/kana';
import { EModes } from '../types/mode';
import { EViews } from '../types/views';
import { IUserStats } from '../types/stats';
import { initializeUserStats } from '../utils';

interface QuestionComopnentProps {
  mode: EModes;
  setView: (view: EViews) => void;
}

interface QuestionComponentState {
  correct: number;
  incorrect: number;
  stats: IUserStats | null;
}

export default class QuestionComponent extends PureComponent<QuestionComopnentProps, QuestionComponentState> {
  constructor(props: QuestionComopnentProps) {
    super(props);
    const userStats: string | null = localStorage.getItem('userStats');
    let userStatsObject;
    if (isNil(userStats)) {
      userStatsObject = initializeUserStats();
    } else {
      userStatsObject = JSON.parse(userStats);
    }
    this.state = {
      correct: 0,
      incorrect: 0,
      stats: userStatsObject,
    };
  }

  incrementCorrect = (character: string, system: ESystem) => {
    this.updateStats(character, system, true);
    this.setState({ correct: this.state.correct + 1 });
  }

  incrementIncorrect = (character: string, system: ESystem) => {
    this.updateStats(character, system, false);
    this.setState({ incorrect: this.state.incorrect + 1 });
  }

  updateStats = (character: string, system: ESystem, correct: boolean) => {
    if (this.state.stats) {
      const kanaStat = this.state.stats[system][character];
      kanaStat.occurrences++;
      if (correct) { kanaStat.correct++; }
      localStorage.setItem('userStats', JSON.stringify(this.state.stats));
    }
  }

  render() {
    const { mode, setView } = this.props;
    const { correct, incorrect } = this.state;

    return (
      <Container>
        <div> ｋａｎａｋａｍａ </div>
        <div> your kana companion </div>
        <Question
          incrementCorrect={this.incrementCorrect}
          incrementIncorrect={this.incrementIncorrect}
          mode={mode}
        />
        {displayScore(correct, incorrect)}
        <Button onClick={() => setView(EViews.title)}>Back to Main Screen</Button>
      </Container>
    );
  }
}

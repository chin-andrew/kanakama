import React from 'react';

import { IUserStats } from '../types/stats';
import buildStats from './buildStats';
import { ESystem } from '../types/kana';

export default (stats: IUserStats) => {
  return (
    <React.Fragment>
      {buildStats(stats.hiragana, ESystem.hiragana)}
      {buildStats(stats.katakana, ESystem.katakana)}
    </React.Fragment>
  );
};

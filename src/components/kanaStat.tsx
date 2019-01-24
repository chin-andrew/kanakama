import React from 'react';
import styled from 'styled-components';

import KanaList from '../kana';
import fetchKanaImage from '../components/image';
import { IKanaStat } from '../types/stats';
import { ESystem } from '../types/kana';

const StatContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
`;

const KanaContainer = styled.div`
  align-items: center;
  display: flex;
  font-size: 20px;
  justify-content: space-around;
`;

export default (systemStat: IKanaStat, kana: string, system: ESystem, count: number) => {

  let imagePath;
  if (system === ESystem.hiragana) {
    imagePath = KanaList[count].hiraganaPath;
  } else {
    imagePath = KanaList[count].katakanaPath;
  }

  return (
    <StatContainer key={`${system}-${kana}`}>
      <KanaContainer>
        {kana}
        {fetchKanaImage(imagePath, 'stats-image')}
      </KanaContainer>
      <div>Correct: {systemStat.correct}</div>
      <div>Occurrences: {systemStat.occurrences}</div>
      <div>
        Accuracy: {
          systemStat.occurrences > 0 ?
          `${systemStat.correct / systemStat.occurrences * 100 }%` :
          'N/A'
        }
      </div>
    </StatContainer>
  );
};

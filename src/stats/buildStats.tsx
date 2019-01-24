import React from 'react';
import styled from 'styled-components';

import renderStat from '../components/kanaStat';
import { IKanaStats } from '../types/stats';
import { ESystem } from '../types/kana';
import './stats.css';

const StatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionHeader = styled.div`
  border-bottom: 2px solid black;
  font-size: 20px;
  padding-top: 8px;
  text-transform: capitalize;
`;

export default (system: IKanaStats, systemName: ESystem) => {
  const stats = [];

  let counter = 0;
  for (const kana in system) {
    const systemStat = system[kana];
    const stat = renderStat(systemStat, kana, systemName, counter);
    stats.push(stat);
    counter++;
  }
  return (
    <SectionContainer>
      <SectionHeader>{systemName}</SectionHeader>
      <StatsContainer>
        {stats}
      </StatsContainer>
    </SectionContainer>
  );
};

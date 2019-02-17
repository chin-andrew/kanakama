import React from 'react';
import styled from 'styled-components';
import { MdChevronRight } from "react-icons/md";

import { fadeIn, rotate90, rotateNeg90 } from '../components/animationKeyframes';
import renderStat from '../components/kanaStat';
import { IKanaStats } from '../types/stats';
import { ESystem } from '../types/kana';

const ExpandChevron = styled(MdChevronRight)`
  animation: 200ms ${(props: { test: boolean }) => (props.test ? rotate90 : rotateNeg90)} ease-in-out forwards;
`;

const StatsContainer = styled.div`
  animation: 500ms ${fadeIn} ease-in-out;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionHeader = styled.div`
  align-items: center;
  border-bottom: 2px solid black;
  display: flex;
  font-size: 20px;
  padding-top: 8px;
  text-transform: capitalize;
`;

export default (system: IKanaStats, systemName: ESystem, isOpen: boolean, toggleStats: () => void) => {
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
      <SectionHeader onClick={() => toggleStats()}><ExpandChevron test={isOpen} />{systemName}</SectionHeader>
      {isOpen && <StatsContainer>{stats}</StatsContainer>}
    </SectionContainer>
  );
};

import styled from 'styled-components';
import { fadeIn } from './animationKeyframes';

export default styled.div`
  animation: 500ms ${fadeIn} ease-in-out;
  display: flex;
  flex-direction: column;
`;

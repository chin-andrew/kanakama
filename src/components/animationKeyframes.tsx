import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const rotate90 = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(90deg);
  }
`;

export const rotateNeg90 = keyframes`
  0% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

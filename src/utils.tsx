import { IKanaStats, IUserStats } from './types/stats';
import kana from './kana';

export const generateRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const initializeUserStats = (): IUserStats => {
  const kanaObject: IKanaStats = {};
  for (const element of kana) {
    kanaObject[element.name] = {
      correct: 0,
      family: element.family,
      occurrences: 0,
    };
  }

  const emptyStatsObject = {
    hiragana: kanaObject,
    katakana: kanaObject,
  };

  localStorage.setItem('userStats', JSON.stringify(emptyStatsObject));

  return emptyStatsObject;
};

export const noop = () => {}; // tslint:disable-line
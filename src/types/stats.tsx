export interface IUserStats {
  hiragana: IKanaStats;
  katakana: IKanaStats;
}

export interface IKanaStats {
  [key: string]: IKanaStat;
}

export interface IKanaStat {
  family: string;
  correct: number;
  occurrences: number;
}

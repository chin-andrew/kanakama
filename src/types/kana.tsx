export default interface IKana {
  id: string;
  hiraganaPath: string;
  katakanaPath: string;
  name: string;
  family: string;
}

export enum ESystem {
  hiragana = 'hiragana',
  katakana = 'katakana',
}

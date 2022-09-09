export enum LANGUAGES {
  EN = 'EN',
}

export interface LanguageState {
  ln: LANGUAGES;
}

export type LanguagesEnumValues = keyof typeof LANGUAGES;

export enum LANGUAGES {
  EN = 'en',
}

export interface LanguageState {
  ln: LANGUAGES;
}

export type LanguagesEnumValues = keyof typeof LANGUAGES;

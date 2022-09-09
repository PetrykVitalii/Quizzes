import { createReducerFunction, ImmerReducer } from 'immer-reducer';

import { LANGUAGES, LanguageState } from '@/interfaces/languages';

const initialState: LanguageState = {
  ln: LANGUAGES.EN,
};

export class LanguageReducer extends ImmerReducer<LanguageState> {
  setLn(ln: LANGUAGES) {
    const lnToSet = Object.values(LANGUAGES).includes(ln) ? ln : LANGUAGES.EN;

    this.draftState.ln = lnToSet;
  }
}

export default createReducerFunction(LanguageReducer, initialState);

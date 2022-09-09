import { createActionCreators } from 'immer-reducer';

import { LanguageReducer } from '@/store/reducers/language';
import { AsyncAction } from '@/store/actions/common';

import { LANGUAGES } from '@/interfaces/languages';

export const languageActions = createActionCreators(LanguageReducer);

export type LanguageActions = ReturnType<typeof languageActions.setLn>;

export const detectLanguage = (): AsyncAction => async (dispatch) => {
  dispatch(languageActions.setLn(LANGUAGES.EN));
};

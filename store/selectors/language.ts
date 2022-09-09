import { createSelector, Selector } from 'reselect';
import { State } from '@/store';
import { LanguagesEnumValues } from '@/interfaces/languages';

const selectLanguage = (state: State) => state.languageReducer;

export const selectLn: Selector<State, LanguagesEnumValues> = createSelector(
  selectLanguage,
  ({ ln }) => ln,
);

export const selectLnForQuery: Selector<State, string> = createSelector(
  selectLanguage,
  ({ ln }) => ln.toLowerCase().trim(),
);

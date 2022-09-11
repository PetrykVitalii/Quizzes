import { createSelector, Selector } from 'reselect';
import { State } from '@/store';

import { RequestState } from '@/store/reducers/common';

import { IQuizze } from '@/interfaces/quizzesApi';

const selectQuizzesSelectorState = (state: State) => state.quizzesReducer;

export const selectQuizzes: Selector<State, IQuizze[]> = createSelector(
  selectQuizzesSelectorState,
  ({ quizzes }) => quizzes,
);

export const selectQuizzesState: Selector<State, RequestState> = createSelector(
  selectQuizzesSelectorState,
  ({ quizzesState }) => quizzesState,
);

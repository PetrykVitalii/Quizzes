import { createSelector, Selector } from 'reselect';
import { State } from '@/store';

import { RequestState } from '@/store/reducers/common';
import { IQuiz } from '@/interfaces/quiz';

const selectQuizReducer = (state: State) => state.quizReducer;

export const selectQuiz: Selector<State, IQuiz | null> = createSelector(
  selectQuizReducer,
  ({ quiz }) => quiz,
);

export const selectQuizState: Selector<State, RequestState> = createSelector(
  selectQuizReducer,
  ({ quizState }) => quizState,
);

export const selectSubmitQuizState: Selector<State, RequestState> = createSelector(
  selectQuizReducer,
  ({ submitQuizState }) => submitQuizState,
);

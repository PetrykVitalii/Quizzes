import { createActionCreators } from 'immer-reducer';

import { QuizReducer } from '@/store/reducers/quiz';

import { RequestState } from '@/store/reducers/common';
import { AsyncAction } from '@/store/actions/common';

export const quizActions = createActionCreators(QuizReducer);

export type QuizActions =
  | ReturnType<typeof quizActions.setQuizState>
  | ReturnType<typeof quizActions.setQuiz>;

export const getQuiz = (quizId: string): AsyncAction => async (
  dispatch,
  _,
  { mainApi },
) => {
  try {
    dispatch(quizActions.setQuizState(RequestState.LOADING));

    const quiz = await mainApi.getQuiz(quizId);

    dispatch(quizActions.setQuiz(quiz));

    dispatch(quizActions.setQuizState(RequestState.LOADED));
  } catch (e) {
    dispatch(quizActions.setQuizState(RequestState.ERROR));
  }
};

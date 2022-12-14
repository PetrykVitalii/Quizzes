import { createActionCreators } from 'immer-reducer';

import { QuizReducer } from '@/store/reducers/quiz';

import { RequestState } from '@/store/reducers/common';
import { AsyncAction } from '@/store/actions/common';

import { IPostQuizObject, ISubmitQuiz } from '@/interfaces/quiz';

export const quizActions = createActionCreators(QuizReducer);

export type QuizActions =
  | ReturnType<typeof quizActions.setQuizState>
  | ReturnType<typeof quizActions.setSubmitQuizState>
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

export const createQuiz = (quiz: IPostQuizObject): AsyncAction => async (
  dispatch,
  _,
  { mainProtectedApi },
) => {
  try {
    dispatch(quizActions.setQuizState(RequestState.LOADING));

    await mainProtectedApi.sendQuiz(quiz);

    dispatch(quizActions.setQuizState(RequestState.LOADED));
  } catch (e) {
    dispatch(quizActions.setQuizState(RequestState.ERROR));
  }
};
export const submitQuiz = (quizId: string, body: ISubmitQuiz[]): AsyncAction => async (
  dispatch,
  _,
  { mainApi },
) => {
  try {
    dispatch(quizActions.setSubmitQuizState(RequestState.LOADING));

    await mainApi.submitQuiz(quizId, body);

    dispatch(quizActions.setSubmitQuizState(RequestState.LOADED));
  } catch (e) {
    dispatch(quizActions.setSubmitQuizState(RequestState.ERROR));
  }
};

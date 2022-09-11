import { createActionCreators } from 'immer-reducer';

import { QuizzesReducer } from '@/store/reducers/quizzes';
import { RequestState } from '@/store/reducers/common';
import { AsyncAction } from '@/store/actions/common';

export const quizzesActions = createActionCreators(QuizzesReducer);

export type QuizzesActions =
  | ReturnType<typeof quizzesActions.setQuizzes>
  | ReturnType<typeof quizzesActions.setQuizzesState>;

export const getQuizzes = (): AsyncAction => async (
  dispatch,
  _,
  { mainApi },
) => {
  try {
    dispatch(quizzesActions.setQuizzesState(RequestState.LOADING));

    // quizes - named according to endpoint
    const { quizes } = await mainApi.getQuizzes();

    dispatch(quizzesActions.setQuizzes(quizes));

    dispatch(quizzesActions.setQuizzesState(RequestState.LOADED));
  } catch (e) {
    dispatch(quizzesActions.setQuizzesState(RequestState.ERROR));
    throw new Error();
  }
};

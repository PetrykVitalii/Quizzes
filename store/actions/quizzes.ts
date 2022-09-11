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
  { mainProtectedApi },
) => {
  try {
    dispatch(quizzesActions.setQuizzesState(RequestState.LOADING));

    // quizes - named according to endpoint
    const quizes = await mainProtectedApi.getQuizzes();

    dispatch(quizzesActions.setQuizzes(quizes));

    dispatch(quizzesActions.setQuizzesState(RequestState.LOADED));
  } catch (e: any) {
    if (e.response.data.message === 'Unauthorized') {
      dispatch(quizzesActions.setQuizzesState(RequestState.ERROR));
    }
  }
};

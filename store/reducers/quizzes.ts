import { createReducerFunction, ImmerReducer } from 'immer-reducer';

import { RequestState } from '@/store/reducers/common';

import { IQuizze } from '@/interfaces/quizzesApi';

export interface QuizzesState {
  quizzes: IQuizze[],
  quizzesState: RequestState,
}

const initialState: QuizzesState = {
  quizzes: [],
  quizzesState: RequestState.IDLE,
};

export class QuizzesReducer extends ImmerReducer<QuizzesState> {
  setQuizzes(quizzes: IQuizze[]) {
    this.draftState.quizzes = quizzes;
  }

  setQuizzesState(quizzesState: RequestState) {
    this.draftState.quizzesState = quizzesState;
  }
}

export default createReducerFunction(QuizzesReducer, initialState);

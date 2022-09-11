import { createReducerFunction, ImmerReducer } from 'immer-reducer';

import { RequestState } from '@/store/reducers/common';

import { IQuiz } from '@/interfaces/quiz';

export interface QuizState {
  quiz: IQuiz | null,
  quizState: RequestState,
}

const initialState: QuizState = {
  quiz: null,
  quizState: RequestState.IDLE,
};

export class QuizReducer extends ImmerReducer<QuizState> {
  setQuiz(quiz: IQuiz) {
    this.draftState.quiz = quiz;
  }

  setQuizState(quizState: RequestState) {
    this.draftState.quizState = quizState;
  }
}

export default createReducerFunction(QuizReducer, initialState);

import HttpClient from '@/api/http-client';

import {
  IAuthResponse, ISignIn, ISignUp, IUser,
} from '@/interfaces/authApi';
import { IQuiz, IQuizType, ISubmitQuiz } from '@/interfaces/quiz';

import { fakeDelay } from '@/utils/fakeAPI';

export default class MainApi extends HttpClient {
  public constructor() {
    super(process.env.API_URL);
  }

  public signIn(body: ISignIn) {
    return this.instance.post<IAuthResponse>('/auth', body);
  }

  public signUp(body: ISignUp) {
    return this.instance.post<IAuthResponse>('/register', body);
  }

  public getMe() {
    return this.instance.get<IUser>('/get_me');
  }

  public refreshTokens(body: { refreshToken: string }) {
    return this.instance.put<IAuthResponse>('/refresh_tokens', body);
  }

  public submitQuiz(quizId: string, body: ISubmitQuiz) {
    return this.instance.post<ISubmitQuiz>(`/submit_quiz/${quizId}`, body);
  }

  public getQuiz(quizId: string): Promise<IQuiz> {
    const quiz: IQuiz = {
      id: '122',
      name: 'Quiz 1',
      questions: [
        {
          id: '12',
          name: 'question 1',
          type: IQuizType.Multiple,
          answers: ['answer1', 'answer2', 'answer3'],
        },
        {
          id: '23',
          name: 'question 2',
          type: IQuizType.Single,
          answers: ['answer1', 'answer2', 'answer3'],
        },
        {
          id: '34',
          name: 'question 3',
          type: IQuizType.Multiple,
          answers: ['answer1', 'answer2', 'answer3'],
        },
        {
          id: '44',
          name: 'question 4',
          type: IQuizType.Multiple,
          answers: ['answer1', 'answer2', 'answer3'],
        },
        {
          id: '55',
          name: 'question 5',
          type: IQuizType.Single,
          answers: ['answer1', 'answer2', 'answer3'],
        },
        {
          id: '65',
          name: 'question 6',
          type: IQuizType.Multiple,
          answers: ['answer1', 'answer2', 'answer3'],
        },
        {
          id: '76',
          name: 'question 7',
          type: IQuizType.Single,
          answers: ['answer1', 'answer2', 'answer3'],
        },
      ],
    };

    console.log(quizId, 'quizId');

    return fakeDelay(quiz, 400);
    // return this.instance.get(`/quiz/${quizId}`);
  }

  public sendQuiz(body: any) {
    return this.instance.post<any>('/quizes', body);
  }
}

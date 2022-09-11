import HttpClient from '@/api/http-client';

import { IQuiz, IQuizType, ISubmitQuiz } from '@/interfaces/quiz';

import { fakeDelay } from '@/utils/fakeAPI';

export default class MainApi extends HttpClient {
  public constructor() {
    super(process.env.API_URL);
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
}

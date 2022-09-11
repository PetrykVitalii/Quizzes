import HttpClient from '@/api/http-client';

import { IQuiz, ISubmitQuiz } from '@/interfaces/quiz';

export default class MainApi extends HttpClient {
  public constructor() {
    super(process.env.API_URL);
  }

  public submitQuiz(quizId: string, body: ISubmitQuiz[]) {
    return this.instance.post<ISubmitQuiz[]>(`/pass-quiz/${quizId}`, body);
  }

  public getQuiz(quizId: string): Promise<IQuiz> {
    return this.instance.get(`/quizes/${quizId}`);
  }
}

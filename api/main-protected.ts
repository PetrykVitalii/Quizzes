/* eslint-disable class-methods-use-this */
import HttpClientProtected from '@/api/http-client-protected';
import { IPostQuizObject } from '@/interfaces/quiz';

import { IQuizze } from '@/interfaces/quizzesApi';

export default class MainProtected extends HttpClientProtected {
  public constructor() {
    super(process.env.API_URL);
  }

  public sendQuiz(body: IPostQuizObject) {
    return this.instance.post<IPostQuizObject>('/quizes', body);
  }

  public getQuizzes() {
    return this.instance.get<IQuizze[]>('/my-quizes');
  }
}

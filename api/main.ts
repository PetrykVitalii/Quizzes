/* eslint-disable class-methods-use-this */
import HttpClient from '@/api/http-client';

export default class MainApi extends HttpClient {
  public constructor() {
    super(process.env.API_URL);
  }

  public getData() {
    // return this.instance.get<Interface>('/url');
  }
}

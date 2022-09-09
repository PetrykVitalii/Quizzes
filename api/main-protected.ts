/* eslint-disable class-methods-use-this */
import HttpClientProtected from '@/api/http-client-protected';

export default class MainProtected extends HttpClientProtected {
  public constructor() {
    super(process.env.API_URL);
  }
}

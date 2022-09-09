import HttpClient from '@/api/http-client';

import {
  IAuthResponse, ISignIn, ISignUp, IUser,
} from '@/interfaces/authApi';

export default class MainApi extends HttpClient {
  public constructor() {
    super(process.env.API_URL);
  }

  public signIn(body: ISignIn) {
    return this.instance.post<IAuthResponse>('/login', body);
  }

  public signUp(body: ISignUp) {
    return this.instance.post<IAuthResponse>('/register', body);
  }

  public getMe() {
    return this.instance.get<IUser>('/get_me');
  }

  public refreshTokens(body: { refresh_token: string }) {
    return this.instance.put<IAuthResponse>('/refresh_tokens', body);
  }
}

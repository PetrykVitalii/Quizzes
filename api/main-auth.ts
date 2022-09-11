import HttpAuthClient from '@/api/http-client-auth';

import {
  IAuthResponse, ISignIn, ISignUp,
} from '@/interfaces/authApi';

import { encode } from '@/utils/api';

export default class MainAuthApi extends HttpAuthClient {
  public constructor() {
    super(process.env.API_URL);
  }

  public signIn(body: ISignIn) {
    return this.instance.post<IAuthResponse>('/auth', encode(body));
  }

  public signUp(body: ISignUp) {
    return this.instance.post<IAuthResponse>('/register', encode(body));
  }

  public refreshTokens(body: { refreshToken: string }) {
    return this.instance.put<IAuthResponse>('/refresh_tokens', body);
  }
}

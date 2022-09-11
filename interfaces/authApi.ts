export interface ISignIn {
  login: string,
  password: string,
}

export interface ISignUp {
  login: string,
  password: string,
}

export interface IAuthResponse {
  accessToken: string,
  refreshToken: string,
}

export interface IUser {
  name: string,
}

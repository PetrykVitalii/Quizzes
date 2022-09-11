export interface ISignIn {
  login: string,
  password: string,
}

export interface ISignUp {
  login: string,
  password: string,
}

export interface IAuthResponse {
  access_token: string,
  refresh_token: string,
}

export interface IUser {
  name: string,
}

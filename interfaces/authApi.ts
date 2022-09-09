export interface ISignIn {
  username: string,
  password: string,
}

export interface ISignUp {
  username: string,
  password: string,
}

export interface IAuthResponse {
  access_token: string,
  refresh_token: string,
}

export interface IUser {
  name: string,
}

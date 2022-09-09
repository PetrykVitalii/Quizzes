import { createReducerFunction, ImmerReducer } from 'immer-reducer';

import { RequestState } from '@/store/reducers/common';

import { IUser } from '@/interfaces/authApi';

export interface AuthState {
  signInState: RequestState,
  signUpState: RequestState,
  refreshTokenState: RequestState,
  user: IUser | null,
  userState: RequestState,
}

const initialState: AuthState = {
  signInState: RequestState.IDLE,
  signUpState: RequestState.IDLE,
  refreshTokenState: RequestState.IDLE,
  user: null,
  userState: RequestState.IDLE,
};

export class AuthReducer extends ImmerReducer<AuthState> {
  setSignInState(signInState: RequestState) {
    this.draftState.signInState = signInState;
  }

  setSignUpState(signUpState: RequestState) {
    this.draftState.signUpState = signUpState;
  }

  setRefreshTokenState(refreshTokenState: RequestState) {
    this.draftState.refreshTokenState = refreshTokenState;
  }

  setUser(user: IUser) {
    this.draftState.user = user;
  }

  setUserState(userState: RequestState) {
    this.draftState.userState = userState;
  }
}

export default createReducerFunction(AuthReducer, initialState);

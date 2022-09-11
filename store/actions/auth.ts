import { createActionCreators } from 'immer-reducer';

import { AuthReducer } from '@/store/reducers/auth';
import { RequestState } from '@/store/reducers/common';
import { AsyncAction } from '@/store/actions/common';

import { ISignIn, ISignUp } from '@/interfaces/authApi';

import LocalStorage, { LOCALS } from '@/utils/localStorage';

export const authActions = createActionCreators(AuthReducer);

export type AuthActions =
  | ReturnType<typeof authActions.setSignInState>
  | ReturnType<typeof authActions.setSignUpState>
  | ReturnType<typeof authActions.setUserState>
  | ReturnType<typeof authActions.setUser>
  | ReturnType<typeof authActions.setRefreshTokenState>;

export const signIn = (body: ISignIn): AsyncAction => async (
  dispatch,
  _,
  { mainApi },
) => {
  try {
    dispatch(authActions.setSignInState(RequestState.LOADING));

    const { access_token: accessToken, refresh_token: refreshToken } = await mainApi.signIn(body);

    LocalStorage.setAccessToken(accessToken);
    LocalStorage.setRefreshToken(refreshToken);

    dispatch(authActions.setSignInState(RequestState.LOADED));
  } catch (e) {
    dispatch(authActions.setSignInState(RequestState.ERROR));
    throw new Error();
  }
};

export const signUp = (body: ISignUp): AsyncAction => async (
  dispatch,
  _,
  { mainApi },
) => {
  try {
    dispatch(authActions.setSignUpState(RequestState.LOADING));

    const { access_token: accessToken, refresh_token: refreshToken } = await mainApi.signUp(body);

    LocalStorage.setAccessToken(accessToken);
    LocalStorage.setRefreshToken(refreshToken);

    dispatch(authActions.setSignUpState(RequestState.LOADED));
  } catch (e) {
    dispatch(authActions.setSignUpState(RequestState.ERROR));
    throw new Error();
  }
};

export const refreshTokens = (): AsyncAction => async (
  dispatch,
  _,
  { mainApi },
) => {
  try {
    await dispatch(authActions.setRefreshTokenState(RequestState.LOADING));

    const storedRefreshToken = LocalStorage.getRefreshToken();

    if (!storedRefreshToken) {
      throw new Error('Invalid Refresh Token');
    }

    const {
      access_token: accessToken,
      refresh_token: refreshToken,
    } = await mainApi.refreshTokens({ refresh_token: storedRefreshToken });

    LocalStorage.setAccessToken(accessToken);
    LocalStorage.setRefreshToken(refreshToken);

    await dispatch(authActions.setRefreshTokenState(RequestState.LOADED));
  } catch {
    dispatch(logOut());
    await dispatch(authActions.setRefreshTokenState(RequestState.ERROR));
  }
};

export const logOut = (): AsyncAction => async () => {
  LocalStorage.clearByKey(LOCALS.AccessToken);
  LocalStorage.setRefreshToken(LOCALS.RefreshToken);
};

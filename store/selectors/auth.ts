import { createSelector, Selector } from 'reselect';
import { State } from '@/store';

import { RequestState } from '@/store/reducers/common';

const selectAuthState = (state: State) => state.authReducer;

export const selectSignInState: Selector<State, RequestState> = createSelector(
  selectAuthState,
  ({ signInState }) => signInState,
);

export const selectSignUpState: Selector<State, RequestState> = createSelector(
  selectAuthState,
  ({ signUpState }) => signUpState,
);

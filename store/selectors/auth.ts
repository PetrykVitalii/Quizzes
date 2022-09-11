import { createSelector, Selector } from 'reselect';
import { State } from '@/store';

import { RequestState } from '@/store/reducers/common';

const selectAuthReducer = (state: State) => state.authReducer;

export const selectSignInState: Selector<State, RequestState> = createSelector(
  selectAuthReducer,
  ({ signInState }) => signInState,
);

export const selectSignUpState: Selector<State, RequestState> = createSelector(
  selectAuthReducer,
  ({ signUpState }) => signUpState,
);

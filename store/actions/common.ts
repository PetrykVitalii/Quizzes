import { ThunkAction } from 'redux-thunk';

import { State, Actions, getApiArguments } from '@/store';

type ExtraArguments = ReturnType<typeof getApiArguments>;

export type AsyncAction<R = void> = Actions | ThunkAction<R, State, ExtraArguments, Actions>;

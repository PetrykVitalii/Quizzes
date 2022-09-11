import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';

import MainApi from '@/api/main';
import MainProtected from '@/api/main-protected';
import S3Api from '@/api/s3';
import MainAuthApi from '@/api/main-auth';

import { LanguageActions } from '@/store/actions/language';
import { AuthActions } from '@/store/actions/auth';
import { QuizActions } from '@/store/actions/quiz';

import languageReducer from '@/store/reducers/language';
import authReducer from '@/store/reducers/auth';
import quizReducer from '@/store/reducers/quiz';

const rootReducer = combineReducers({
  languageReducer,
  quizReducer,
  authReducer,
});

const composeEnhancers = (typeof window === 'undefined' || !window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? compose : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const mainApi = new MainApi();
const mainAuthApi = new MainAuthApi();
const mainProtectedApi = new MainProtected();
const s3Api = new S3Api();

export const getApiArguments = () => ({
  mainApi,
  mainProtectedApi,
  mainAuthApi,
  s3Api,
});

const enhancer = composeEnhancers(
  applyMiddleware(
    thunk.withExtraArgument(getApiArguments()),
  ),
);

export type State = ReturnType<typeof rootReducer>;
export type Actions =
  | AuthActions
  | QuizActions
  | LanguageActions;

export const store = createStore(rootReducer, enhancer);

export type AppDispatch = typeof store.dispatch;

export default store;

export const getStore = () => store;

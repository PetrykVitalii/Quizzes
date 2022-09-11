/* eslint-disable global-require */
import base64 from 'base-64';

export const getRefreshTokensAction = () => require('@/store/actions/auth').refreshTokens();

export const encode = <T>(value: T): string => base64.encode(JSON.stringify(value));

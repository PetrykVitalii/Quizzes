export enum LOCALS {
  AccessToken = 'access_token',
  RefreshToken = 'refresh_token',
}

export default class LocalStorage {
  static getAccessToken() {
    const token = window.localStorage.getItem(LOCALS.AccessToken);
    return token;
  }

  static setAccessToken(token: string) {
    window.localStorage.setItem(LOCALS.AccessToken, token);
  }

  static getRefreshToken() {
    const token = window.localStorage.getItem(LOCALS.RefreshToken);
    return token;
  }

  static setRefreshToken(token: string) {
    window.localStorage.setItem(LOCALS.RefreshToken, token);
  }

  static clearByKey(key: LOCALS) {
    window.localStorage.removeItem(key);
  }

  static clear() {
    window.sessionStorage.clear();
  }
}

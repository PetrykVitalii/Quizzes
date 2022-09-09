export enum LOCALS {
  TOKEN = 'token',
}

export default class LocalStorage {
  static getToken() {
    const token = window.localStorage.getItem(LOCALS.TOKEN);
    return token;
  }

  static setToken(token: string) {
    window.localStorage.setItem(LOCALS.TOKEN, token);
  }

  static clearByKey(key: LOCALS) {
    window.localStorage.removeItem(key);
  }

  static clear() {
    window.sessionStorage.clear();
  }
}

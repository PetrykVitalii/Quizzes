export enum LOCALS {
  TOKEN = 'token',
}

export default class SessionStorage {
  static getToken() {
    const token = window.sessionStorage.getItem(LOCALS.TOKEN);
    return token;
  }

  static setToken(token: string) {
    window.sessionStorage.setItem(LOCALS.TOKEN, token);
  }

  static clearByKey(key: LOCALS) {
    window.sessionStorage.removeItem(key);
  }

  static clear() {
    window.sessionStorage.clear();
  }
}

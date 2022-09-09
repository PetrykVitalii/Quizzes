/* eslint-disable class-methods-use-this */
import { AxiosRequestConfig } from 'axios';
import HttpClient from '@/api/http-client';

import LocalStorage from '@/utils/localStorage';

import { getRefreshTokensAction } from '@/utils/api';

export default abstract class HttpClientProtected extends HttpClient {
  public constructor(baseURL: string) {
    super(baseURL);

    this.initializeRequestInterceptor();
  }

  private initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(this.handleRequest, this.handleErrorRequest);
  };

  private handleRequest = async (config: AxiosRequestConfig) => {
    const token = LocalStorage.getAccessToken();

    const modifiedConfig = { ...config };
    modifiedConfig.headers!.Authorization = `Bearer ${token}`;

    return modifiedConfig;
  };

  private handleErrorRequest = async (config: AxiosRequestConfig) => {
    try {
      await getRefreshTokensAction();
      this.handleRequest(config);
    } catch (e) {
      console.error(e);
    }
  };
}

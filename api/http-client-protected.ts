/* eslint-disable class-methods-use-this */
import { AxiosRequestConfig } from 'axios';
import HttpClient from '@/api/http-client';

import LocalStorage from '@/utils/localStorage';

export default abstract class HttpClientProtected extends HttpClient {
  public constructor(baseURL: string) {
    super(baseURL);

    this.initializeRequestInterceptor();
  }

  private initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(this.handleRequest);
  };

  private handleRequest = async (config: AxiosRequestConfig) => {
    const token = LocalStorage.getToken();

    const modifiedConfig = { ...config };
    modifiedConfig.headers!.Authorization = `Bearer ${token}`;

    return modifiedConfig;
  };
}

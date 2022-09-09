/* eslint-disable class-methods-use-this */
import axios, { AxiosInstance, AxiosResponse } from 'axios';

export default abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  public constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.initializeResponseInterceptor();
  }

  protected initializeResponseInterceptor() {
    this.instance.interceptors.response.use(
      this.handleSuccessResponse,
    );
  }

  protected handleSuccessResponse<T>({ data }: AxiosResponse<T>): T {
    return data;
  }
}

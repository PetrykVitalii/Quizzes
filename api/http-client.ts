/* eslint-disable class-methods-use-this */
import { encode } from '@/utils/api';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

export default abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  public constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
      transformRequest: [(data) => encode(data)],
      headers: {
        'Content-Type': 'text/plain',
      },
    });

    this.initializeResponseInterceptor();
  }

  protected initializeResponseInterceptor() {
    this.instance.interceptors.response.use(
      this.handleSuccessResponse,
    );
  }

  protected handleSuccessResponse<T>({ data }: AxiosResponse<{ data: T }>): T {
    return data.data;
  }
}

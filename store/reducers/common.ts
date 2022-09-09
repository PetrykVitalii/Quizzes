export enum RequestState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  LOADED = 'LOADED',
  ERROR = 'ERROR',
}

export interface RequestOptions {
  silent?: boolean;
  isToast?: boolean;
}

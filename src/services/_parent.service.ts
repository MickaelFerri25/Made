import { Error } from '../errors/index';

export default abstract class Service {
  public success = <T>(response: T): ServiceResult<T> => {
    return this.result<T>('success', response);
  };
  public error = (error: Error, data?: any): ServiceResult => {
    return this.result('error', { data, code: error.code, info: error.info });
  };

  private result = <T = ServiceError>(status: 'success' | 'error', data: T): ServiceResult<T> => {
    return {
      status,
      data,
    };
  };
}

export interface ServiceResult<T = ServiceError> {
  status: 'success' | 'error';
  data: T;
}

export interface ServiceError {
  code: number;
  info: string;
  data: any;
}

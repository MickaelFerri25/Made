import * as GlobalErrors from './global.error';
import * as UserErrors from './user.error';

export interface Error {
  code: number;
  info: string;
}

export default {
  global: GlobalErrors,
  user: UserErrors,
};

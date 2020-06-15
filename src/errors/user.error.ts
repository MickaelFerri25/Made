import { Error } from './index';

export const EmailAlreadyUsed: Error = {
  code: 101,
  info: 'Email already used',
};

export const IncorrectAuthInfos: Error = {
  code: 102,
  info: 'Email or password incorrect',
};

export const ConfirmPasswordNotMatch: Error = {
  code: 103,
  info: 'Confirm password do not match',
};

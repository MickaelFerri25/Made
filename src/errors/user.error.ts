import { Error } from './index';

export const EmailAlreadyUsed: Error = {
  code: 101,
  info: 'Email est déjà utilisé',
};

export const IncorrectAuthInfos: Error = {
  code: 102,
  info: 'Email ou mot de passe incorrecte',
};

export const ConfirmPasswordNotMatch: Error = {
  code: 103,
  info: 'Confirm password do not match',
};

export const PasswordDontMatchRequirements: Error = {
  code: 104,
  info: 'Le mot de passe ne correspond pas aux exigences (au moins 8 caractères et 1 chiffre)',
};

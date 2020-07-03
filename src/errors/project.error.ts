import { Error } from '.';

export const NameAlreadyUsed: Error = {
  code: 201,
  info: 'Project name is already used',
};

export const CategoryNotFound: Error = {
  code: 202,
  info: 'Project category not found',
};

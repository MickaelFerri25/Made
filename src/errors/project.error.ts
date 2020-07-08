import { Error } from '.';

export const NameAlreadyUsed: Error = {
  code: 201,
  info: 'Project name is already used',
};

export const CategoryNotFound: Error = {
  code: 202,
  info: 'Project category not found',
};

export const DesignLinkIncorrect: Error = {
  code: 203,
  info: 'Design link incorrect (not a figma link)',
};

export const LevelNotFound: Error = {
  code: 204,
  info: 'Level not found',
};

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

export const TypeNotFound: Error = {
  code: 205,
  info: 'Type not found',
};

export const CodesandboxLinkIncorrect: Error = {
  code: 206,
  info: 'CodeSandbox link incorrect',
};

export const GithubLinkIncorrect: Error = {
  code: 207,
  info: 'Github link incorrect',
};

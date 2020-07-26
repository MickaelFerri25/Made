import { Error } from '.';

export const NameAlreadyUsed: Error = {
  code: 201,
  info: 'Le nom du projet est déjà utilisé',
};

export const CategoryNotFound: Error = {
  code: 202,
  info: 'Project category not found',
};

export const DesignLinkIncorrect: Error = {
  code: 203,
  info: 'Lien incorrecte (utiliser un lien figma valide.)',
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

export const BioVide: Error = {
  code: 208,
  info: 'La bio est trop courte',
};

export const ImgIncorrect: Error = {
  code: 209,
  info: 'Les images doivent être en .svg',
};
import express from 'express';

export const home = (req: express.Request, res: express.Response) => {
  return res.render('pages/home.njk');
};

export const comment = (req: express.Request, res: express.Response) => {
  return res.render('pages/commentaires.njk');
};

export const connexion = (req: express.Request, res: express.Response) => {
  return res.render('pages/connexion.njk');
};

export const inscription = (req: express.Request, res: express.Response) => {
  return res.render('pages/inscription.njk');
};

export const frontend = (req: express.Request, res: express.Response) => {
  return res.render('pages/frontend.njk');
};

export const upload = (req: express.Request, res: express.Response) => {
  return res.render('pages/upload.njk');
};

export const releases = (req: express.Request, res: express.Response) => {
  return res.render('pages/releases.njk');
};
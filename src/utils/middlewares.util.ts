import { EntityManager } from '@smallprod/models';
import express from 'express';

export const errorHandler = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    next();
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

export const requireNotLogged = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (req.session && req.session.user) {
    return res.redirect('/');
  }
  next();
};

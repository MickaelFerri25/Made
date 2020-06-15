import { CreateAccountSuccess, LoginSuccess } from '../services/results/user.result';
import { ServiceError, ServiceResult } from '../services/_parent.service';
import errors, { Error } from '../errors/index';

import UserService from '../services/user.service';
import express from 'express';

export const home = (req: express.Request, res: express.Response) => {
  return res.render('pages/home.njk');
};

export const comment = (req: express.Request, res: express.Response) => {
  return res.render('pages/commentaires.njk');
};

export const connexion = async (req: express.Request, res: express.Response) => {
  let error: Error | null = null;
  console.log(req.body);
  if (req.body && req.body.email && req.body.password) {
    const serviceResult = await new UserService().login(req.body.email, req.body.password);
    if (serviceResult.status === 'error') {
      const result = serviceResult as ServiceResult<ServiceError>;
      error = { code: result.data.code, info: result.data.info };
    } else {
      const result = serviceResult as ServiceResult<LoginSuccess>;
      if (req.session) req.session.user = result.data.user;
      return res.redirect('/');
    }
  }
  return res.render('pages/connexion.njk', { error });
};

export const inscription = async (req: express.Request, res: express.Response) => {
  console.log(req.body);
  let error: Error | null = null;
  if (req.body && req.body.pseudo && req.body.email && req.body.password && req.body.password_confirm) {
    if (req.body.password === req.body.password_confirm) {
      const serviceResult = await new UserService().createAccount(req.body.pseudo, req.body.email, req.body.password);
      if (serviceResult.status === 'error') {
        const result = serviceResult as ServiceResult<ServiceError>;
        error = { code: result.data.code, info: result.data.info };
      } else {
        const result = serviceResult as ServiceResult<CreateAccountSuccess>;
        // ! TODO something here
      }
    } else {
      error = errors.user.ConfirmPasswordNotMatch;
    }
  }
  return res.render('pages/inscription.njk', { error });
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

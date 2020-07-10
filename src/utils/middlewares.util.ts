import express from 'express';
import { v4 as uuidv4 } from 'uuid';

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

export const requireLogged = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (!req.session || !req.session.user) {
    return res.redirect('/');
  }
  res.locals.user = req.session.user;
  res.locals.renderWithUser = (template: string, params?: any) => {
    res.render(template, { ...params, user: res.locals.user });
  };
  next();
};

export const betterRender = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  let user: any = null;
  if (req.session && req.session.user) {
    user = req.session.user;
  }
  const _render = res.render;
  res.render = function (view: string, options?: any, callback?: any) {
    const csrf = uuidv4();
    if (req.session) {
      req.session.csrf = csrf;
    }
    const csrf_input = `<input type="hidden" name="csrf" value="${csrf}" />`;
    _render.call(this, view, { ...options, user, csrf, csrf_input }, callback);
  };
  next();
};

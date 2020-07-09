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
    _render.call(this, view, { ...options, user }, callback);
  };
  next();
};

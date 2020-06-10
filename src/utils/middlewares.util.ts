import express from 'express';

export const errorHandler = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    next();
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

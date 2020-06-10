import express from 'express';

export const home = (req: express.Request, res: express.Response) => {
  return res.render('pages/home.njk');
};

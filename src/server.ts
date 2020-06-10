import { ConnectDb } from './models/db.model';
import bodyParser from 'body-parser';
import config from './utils/config.util';
import cookieParser from 'cookie-parser';
import { errorHandler } from './utils/middlewares.util';
import express from 'express';
import expressSession from 'express-session';
import helmet from 'helmet';
import nunjucks from 'nunjucks';

export default async () => {
  await ConnectDb();
  const app = express();
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(helmet());
  app.use(
    expressSession({
      secret: config.session.secret,
      resave: false,
      saveUninitialized: true,
      cookie: {
        secure: config.session.secure,
      },
    }),
  );
  app.set('view engine', 'njk');
  app.use(errorHandler);
  app.use('/assets', express.static('assets'));

  nunjucks.configure('view', {
    express: app,
    autoescape: true,
    noCache: !config.session.cache,
  });
  return app;
};

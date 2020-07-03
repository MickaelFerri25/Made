import { CreateAccountSuccess, LoginSuccess } from '../services/results/user.result';
import { ServiceError, ServiceErrors, ServiceResult } from '../services/_parent.service';
import errors, { Error } from '../errors/index';

import { CreateProjectSuccess } from '../services/results/project.result';
import ProjectCategoryService from '../services/projectcategory.service';
import ProjectEntity from '../models/entities/project.entity';
import ProjectService from '../services/project.service';
import UserService from '../services/user.service';
import express from 'express';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

export const home = (req: express.Request, res: express.Response) => {
  return res.render('pages/home.njk');
};

export const comment = (req: express.Request, res: express.Response) => {
  return res.render('pages/commentaires.njk');
};

export const connexion = async (req: express.Request, res: express.Response) => {
  let error: Error | null = null;
  // Check if it's a POST
  if (req.body && req.body.email && req.body.password) {
    const serviceResult = await new UserService(res.locals.modelContext).login(req.body.email, req.body.password); // Call the service
    if (serviceResult.status === 'error') {
      const result = serviceResult as ServiceResult<ServiceError>;
      error = { code: result.data.code, info: result.data.info };
    } else {
      const result = serviceResult as ServiceResult<LoginSuccess>;
      if (req.session) req.session.user = result.data.user; // Set the session
      return res.redirect('/'); // Redirect the user to home page
    }
  }
  return res.render('pages/connexion.njk', { error });
};

export const inscription = async (req: express.Request, res: express.Response) => {
  let resErrors: Error[] = [];
  // Check if it's a POST
  if (req.body && req.body.pseudo && req.body.email && req.body.password && req.body.password_confirm) {
    if (req.body.password === req.body.password_confirm) {
      const serviceResult = await new UserService(res.locals.modelContext).createAccount(
        req.body.pseudo,
        req.body.email,
        req.body.password,
      ); // Call the service
      if (serviceResult.status === 'error') {
        const result = serviceResult as ServiceResult<ServiceErrors>;
        resErrors = result.data.errors;
      } else {
        const result = serviceResult as ServiceResult<CreateAccountSuccess>;
        if (req.session) req.session.user = result.data.user; // Set the session
        return res.redirect('/'); // Redirect the user to home page
      }
    } else {
      resErrors.push(errors.user.ConfirmPasswordNotMatch);
    }
  }
  const errorCodes: any = resErrors.reduce((prev: any, e) => (prev[e.code] = true), {});
  return res.render('pages/inscription.njk', { errorCodes, errors: resErrors });
};

export const frontend = (req: express.Request, res: express.Response) => {
  return res.render('pages/frontend.njk');
};

export const upload = async (req: express.Request, res: express.Response) => {
  let resErrors: Error[] = [];
  if (req.body && req.body.name && req.body.category && req.body.description && req.file) {
    const picturePath = `${uuidv4()}${req.file.originalname.substring(req.file.originalname.lastIndexOf('.'))}`;
    const serviceResult = await new ProjectService(res.locals.modelContext).create(
      req.body.name,
      req.body.description,
      req.body.category,
      req.body.designLink || '',
      picturePath,
      res.locals.user,
    );
    if (serviceResult.status === 'error') {
      const resu = serviceResult as ServiceResult<ServiceErrors>;
      resErrors = resu.data.errors;
    } else {
      const resu = serviceResult as ServiceResult<CreateProjectSuccess>;
      fs.copyFileSync(req.file.path, `assets/upload/project/${picturePath}`);
      fs.unlinkSync(req.file.path);
      return res.redirect(`/upload/${resu.data.project.id}`);
    }
    fs.unlinkSync(req.file.path);
  }
  const projectCategories = (await new ProjectCategoryService(res.locals.modelContext).getAll()).data.categories;
  const errorCodes: any = resErrors.reduce((prev: any, e) => (prev[e.code] = true), {});
  return res.render('pages/upload.njk', { projectCategories, errorCodes, errors: resErrors });
};

export const uploadPublish = async (req: express.Request, res: express.Response) => {
  const project: ProjectEntity | null = await ProjectEntity.findById(req.params.projectId, res.locals.modelContext);
  if (!project) return res.redirect('/');
  if (project.author.id !== res.locals.user.id) return res.redirect('/');
  if (project.isPublished) return res.redirect('/');
  let resErrors: Error[] = [];
  if (req.body && req.body.rules) {
    const serviceResult = await new ProjectService(res.locals.modelContext).publish(req.body.rules, project);
    console.log(serviceResult);
    if (serviceResult.status === 'error') {
      const resu = serviceResult as ServiceResult<ServiceError>;
      resErrors = [resu.data];
    } else {
      // ! TODO redirect to project
    }
  }
  const errorCodes: any = resErrors.reduce((prev: any, e) => (prev[e.code] = true), {});
  return res.render('pages/upload2.njk', { errorCodes, errors: resErrors });
};

export const releases = (req: express.Request, res: express.Response) => {
  return res.render('pages/releases.njk');
};

export const logout = (req: express.Request, res: express.Response) => {
  if (req.session) {
    req.session.user = undefined;
  }
  return res.redirect('/');
};

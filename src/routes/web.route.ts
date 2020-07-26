import { requireLogged, requireNotLogged } from '../utils/middlewares.util';

import controllers from '../controllers';
import express from 'express';
import multer from 'multer';
import path from 'path';
import { withContext } from '@smallprod/models';

const upload = multer({
  dest: 'assets/upload/temp',
  limits: { files: 1, fileSize: 20000000 },
  fileFilter: (req, file, cb) => (file.mimetype === 'image/svg+xml' ? cb(null, true) : cb(null, false)),
});

const router = express.Router();

router.get('/', controllers.web.home);

// Auth
router.get('/connexion', requireNotLogged, withContext(controllers.web.connexion));
router.post('/connexion', requireNotLogged, withContext(controllers.web.connexion));
router.get('/inscription', requireNotLogged, withContext(controllers.web.inscription));
router.post('/inscription', requireNotLogged, withContext(controllers.web.inscription));
router.get('/logout', requireLogged, controllers.web.logout);

// Feature request
router.get('/commentaires', requireLogged, withContext(controllers.web.comment));
router.post('/commentaires', requireLogged, withContext(controllers.web.comment));

// Project categories
router.get('/categories', withContext(controllers.web.categories));
router.get('/category/:categorySlug', withContext(controllers.web.category));

// Project
router.get('/project/:projectId', withContext(controllers.web.project));

// Project creation
router.get('/upload', requireLogged, controllers.web.upload);
router.post('/upload', requireLogged, upload.single('image'), withContext(controllers.web.upload));
router.get('/upload/:projectId', requireLogged, withContext(controllers.web.uploadPublish));
router.post('/upload/:projectId', requireLogged, withContext(controllers.web.uploadPublish));

router.get('/releases', controllers.web.releases); // ! TODO remove that maybe

// Contact
router.get('/contact', controllers.web.contact);
router.post('/contact', controllers.web.contact);

// Confidentiality
router.get('/confidentialite', controllers.web.confidentialite);

// Apprentissage
router.get('/ressources', controllers.web.ressources);
export default router;

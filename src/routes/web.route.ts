import { requireLogged, requireNotLogged } from '../utils/middlewares.util';

import controllers from '../controllers';
import express from 'express';
import multer from 'multer';
import { withContext } from '@smallprod/models';

const upload = multer({ dest: 'assets/upload/temp', limits: { files: 1, fileSize: 20000000 } });

const router = express.Router();

router.get('/', controllers.web.home);
router.get('/commentaires', controllers.web.comment); // ! TODO remove this

// Auth
router.get('/connexion', requireNotLogged, withContext(controllers.web.connexion));
router.post('/connexion', requireNotLogged, withContext(controllers.web.connexion));
router.get('/inscription', requireNotLogged, withContext(controllers.web.inscription));
router.post('/inscription', requireNotLogged, withContext(controllers.web.inscription));
router.get('/logout', requireLogged, controllers.web.logout);

// Project categories
router.get('/category/:categorySlug', withContext(controllers.web.category));

// Project
router.get('/project/:projectId', withContext(controllers.web.project));

// Project creation
router.get('/upload', requireLogged, controllers.web.upload);
router.post('/upload', requireLogged, upload.single('image'), withContext(controllers.web.upload));
router.get('/upload/:projectId', requireLogged, withContext(controllers.web.uploadPublish));
router.post('/upload/:projectId', requireLogged, withContext(controllers.web.uploadPublish));

router.get('/releases', controllers.web.releases);

export default router;

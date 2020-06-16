import { requireNotLogged } from '../utils/middlewares.util';
import { withContext } from '@smallprod/models';

import controllers from '../controllers';
import express from 'express';

const router = express.Router();

router.get('/', controllers.web.home);
router.get('/commentaires', controllers.web.comment);
router.get('/connexion', requireNotLogged, withContext(controllers.web.connexion));
router.post('/connexion', requireNotLogged, withContext(controllers.web.connexion));
router.get('/inscription', requireNotLogged, withContext(controllers.web.inscription));
router.post('/inscription', requireNotLogged, withContext(controllers.web.inscription));
router.get('/frontend', controllers.web.frontend);
router.get('/upload', controllers.web.upload);
router.get('/releases', controllers.web.releases);
export default router;

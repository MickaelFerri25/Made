import controllers from '../controllers';
import express from 'express';
import { requireNotLogged } from '../utils/middlewares.util';

const router = express.Router();

router.get('/', controllers.web.home);
router.get('/commentaires', controllers.web.comment);
router.get('/connexion', requireNotLogged, controllers.web.connexion);
router.post('/connexion', requireNotLogged, controllers.web.connexion);
router.get('/inscription', requireNotLogged, controllers.web.inscription);
router.post('/inscription', requireNotLogged, controllers.web.inscription);
router.get('/frontend', controllers.web.frontend);
router.get('/upload', controllers.web.upload);
router.get('/releases', controllers.web.releases);
export default router;

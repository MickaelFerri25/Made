import controllers from '../controllers';
import express from 'express';

const router = express.Router();

router.get('/', controllers.web.home);
router.get('/commentaires', controllers.web.comment);
router.get('/connexion', controllers.web.connexion);
router.get('/inscription', controllers.web.inscription);
router.get('/frontend', controllers.web.frontend);
router.get('/upload', controllers.web.upload);
router.get('/releases', controllers.web.releases);
export default router;

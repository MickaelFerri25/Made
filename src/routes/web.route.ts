import controllers from '../controllers';
import express from 'express';

const router = express.Router();

router.get('/', controllers.web.home);

export default router;

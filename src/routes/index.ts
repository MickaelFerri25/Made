import express from 'express';
import webRoutes from './web.route';

const router = express.Router();

router.use('/', webRoutes);

export default router;

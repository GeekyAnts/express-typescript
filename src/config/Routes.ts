/**
 * Define all your routes
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import { Router } from 'express';

import HomeController from '../controllers/Home';

const router = Router();

router.get('/', HomeController.index);

export default router;

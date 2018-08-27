/**
 * Define all your routes
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import * as passport from 'passport';
import { Router } from 'express';

import HomeController from '../controllers/Home';
import RegisterController from '../controllers/Auth/Register';
import LoginController from '../controllers/Auth/Login';
import LogoutController from '../controllers/Auth/Logout';

const router = Router();

router.get('/', HomeController.index);
router.post('/signup', RegisterController.perform);
router.post('/login', LoginController.perform);
router.get('/logout', LogoutController.perform);

router.get('/oauth/google', passport.authenticate('google'));
router.get('/oauth/google/callback', passport.authenticate('google', { failureRedirect: '/#login' }), (req, res) => {
	res.redirect(req.originalUrl || req.url);
});

export default router;

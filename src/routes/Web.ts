/**
 * Define all your Web routes
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import * as passport from 'passport';
import { Router } from 'express';

import Cache from './../providers/Cache';
import Passport from './../providers/Passport';

import HomeController from '../controllers/Home';
import AccountController from '../controllers/Account';
import LoginController from '../controllers/Auth/Login';
import LogoutController from '../controllers/Auth/Logout';
import SocialController from '../controllers/Auth/Social';
import RegisterController from '../controllers/Auth/Register';

const router = Router();
const cache = Cache.cache;

router.get('/', cache(10), HomeController.index);

router.get('/signup', cache(10), RegisterController.show);
router.post('/signup', RegisterController.perform);

router.get('/login', cache(10), LoginController.show);
router.post('/login', LoginController.perform);

router.get('/logout', LogoutController.perform);

router.get('/account', Passport.isAuthenticated, AccountController.index);

router.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'], failureRedirect: '/login' }));
router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), SocialController.googleCallback);

router.get('/auth/twitter', passport.authenticate('twitter'));
router.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/login' }), (req, res) => {
	res.redirect('/');
});

export default router;

/**
 * Enables CSRF Token authorizaton for
 * your routes
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import { Application } from 'express';
import * as lusca from 'lusca';

import Log from './Log';
import Locals from '../providers/Locals';

class CsrfToken {
	public static mount(_express: any): Application {
		Log.info('Booting the \'CsrfToken\' middleware...');

		_express.set('trust proxy', 1);

		// Interpolate the user variable into your pug files
		_express.use((req, res, next) => {
			res.locals.user = req.user;
			res.locals.app = Locals.config();
			next();
		});

		// Check for CSRF token iff the original url
		// does not contains the api substring
		_express.use((req, res, next) => {
			const apiPrefix = Locals.config().apiPrefix;

			if (req.originalUrl.includes(`/${apiPrefix}/`)) {
				next();
			} else {
				lusca.csrf()(req, res, next);
			}
		});

		// Enables x-frame-options headers
		_express.use(lusca.xframe('SAMEORIGIN'));

		// Enables xss-protection headers
		_express.use(lusca.xssProtection(true));

		_express.use((req, res, next) => {
			// After successful login, redirect back to the intended page
			if (!req.user
				&& req.path !== '/login'
				&& req.path !== '/signup'
				&& !req.path.match(/^\/auth/)
				&& !req.path.match(/\./)) {
				req.session.returnTo = req.originalUrl;
			} else if (req.user
					&& (req.path === '/account' || req.path.match(/^\/api/))) {
				req.session.returnTo = req.originalUrl;
			}
			next();
		});

		return _express;
	}
}

export default CsrfToken;

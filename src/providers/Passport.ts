/**
 * Defines the passport config
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import * as passport from 'passport';

import LocalStrategy from '../services/strategies/Local';
import User from '../models/User';

class Passport {
	public static mountPackage (_express): any {
		_express = _express.use(passport.initialize());
		_express = _express.use(passport.session());

		passport.serializeUser ((user, done) => {
			done(null, user.id);
		});

		passport.deserializeUser ((id, done) => {
			User.findById(id, (err, user) => {
				done(err, user);
			});
		});

		this.mountLocalStrategies();

		return _express;
	}

	public static mountLocalStrategies(): any {
		LocalStrategy.init(passport);
	}

	public static isAuthenticated (req, res, next): any {
		if (req.isAuthenticated()) {
			return next();
		}

		req.flash('errors', { msg: 'Please Log-In to access any further!'});
		res.redirect('/login');
	}

	public static isAuthorized (req, res, next): any {
		const provider = req.path.split('/').slice(-1)[0];
		const token = req.user.tokens.find(token => token.kind === provider);
		if (token) {
			next();
		} else {
			res.redirect(`/auth/${provider}`);
		}
	}
}

export default Passport;

/**
 * Defines the passport config
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import * as passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

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

		this.mountLocalStrategy();

		return _express;
	}

	public static mountLocalStrategy(): any {
		passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
			User.findOne({ email: email.toLowerCase() }, (err, user) => {
				if (err) {
					return done(err);
				}

				if (! user) {
					return done(null, false, { msg: `E-mail ${email} not found.`});
				}

				user.comparePassword(password, (_err, _isMatch) => {
					if (_err) {
						return done(_err);
					}
					if (_isMatch) {
						return done(null, user);
					}
					return done(null, false, { msg: 'Invalid E-mail or password.'});
				});
			});
		}));
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

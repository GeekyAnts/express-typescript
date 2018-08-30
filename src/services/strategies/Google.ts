/**
 * Define Google OAuth2
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import { OAuth2Strategy as Strategy } from 'passport-google-oauth';
import User from '../../models/User';

class Google {
	public static init (_passport: any): any {
		_passport.use(new Strategy({
			clientID: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
			callbackURL: 'http://localhost:4040/auth/google/callback',
			passReqToCallback: true
		}, (req, accessToken, refreshToken, profile, done) => {
			if (req.user) {
				User.findOne({ google: profile.id }, (err, existingUser) => {
					if (err) {
						return done(err);
					}

					if (existingUser) {
						req.flash('errors', { msg: 'There is already a Google account that belongs to you. Sign in with that account or delete it, then link it with your current account.' });
						return done(err);
					} else {
						User.findById(req.user.id, (err, user) => {
							if (err) {
								return done(err);
							}

							user.google = profile.id;
							user.tokens.push({ kind: 'google', accessToken });
							user.fullname = user.fullname || profile.displayName;
							user.gender = user.gender || profile._json.gender;
							user.picture = user.picture || profile._json.image.url;
							user.save((err) => {
								req.flash('info', { msg: 'Google account has been linked.' });
								return done(err, user);
							});
						});
					}
				});
			} else {
				User.findOne({ google: profile.id }, (err, existingUser) => {
					if (err) {
						return done(err);
					}

					if (existingUser) {
						return done(null, existingUser);
					}

					User.findOne({ email: profile.emails[0].value }, (err, existingEmailUser) => {
						if (err) {
							return done(err);
						}

						if (existingEmailUser) {
							req.flash('errors', { msg: 'There is already an account using this email address. Sing in to that accoount and link it with Google manually from Account Settings.' });
							return done(err);
						} else {
							const user = new User();

							user.email = profile.emails[0].value;
							user.google = profile.id;
							user.tokens.push({ kind: 'google', accessToken });
							user.fullname = user.fullname || profile.displayName;
							user.gender = user.gender || profile._json.gender;
							user.picture = user.picture || profile._json.image.url;
							user.save((err) => {
								return done(err, user);
							});
						}
					});
				});
			}
		}));
	}
}

export default Google;

/**
 * Define passport's local strategy
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import { Strategy } from 'passport-local';
import User from '../../models/User';
import Log from '../../middlewares/Log';

class Local {
	public static init (_passport: any): any {
		_passport.use(new Strategy({ usernameField: 'email' }, (email, password, done) => {
			Log.info(`Email is ${email}`);
			Log.info(`Password is ${password}`);

			User.findOne({ email: email.toLowerCase() }, (err, user) => {
				Log.info(`user is ${user.email}`);
				Log.info(`error is ${err}`);

				if (err) {
					return done(err);
				}

				if (! user) {
					return done(null, false, { msg: `E-mail ${email} not found.`});
				}

				if (user && !user.password) {
					return done(null, false, { msg: `E-mail ${email} was not registered with us using any password. Please use the appropriate providers to Log-In again!`});
				}

				Log.info('comparing password now!');

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
}

export default Local;

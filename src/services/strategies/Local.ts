/**
 * Define passport's local strategy
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import { Strategy } from 'passport-local';
import User from '../../models/User';

class Local {
	public static init (_passport: any): any {
		_passport.use(new Strategy({ usernameField: 'email' }, (email, password, done) => {
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
}

export default Local;

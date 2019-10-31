/**
 * Handles your register route
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import User from '../../models/User';
import { IRequest, IResponse, INext } from '../../interfaces/vendors';

class Register {
	public static show (req: IRequest, res: IResponse): any {
		return res.render('pages/signup', {
			title: 'SignUp'
		});
	}

	public static perform (req: IRequest, res: IResponse, next: INext): any {
		req.assert('email', 'E-mail cannot be blank').notEmpty();
		req.assert('email', 'E-mail is not valid').isEmail();
		req.assert('password', 'Password cannot be blank').notEmpty();
		req.assert('password', 'Password length must be atleast 8 characters').isLength({ min: 8 });
		req.assert('confirmPassword', 'Confirmation Password cannot be blank').notEmpty();
		req.assert('confirmPassword', 'Password & Confirmation password does not match').equals(req.body.password);
		req.sanitize('email').normalizeEmail({ gmail_remove_dots: false });

		const errors = req.validationErrors();
		if (errors) {
			req.flash('errors', errors);
			return res.redirect('/signup');
		}

		const user = new User({
			email: req.body.email,
			password: req.body.password
		});

		User.findOne({ email: req.body.email }, (err, existingUser) => {
			if (err) {
				return next(err);
			}

			if (existingUser) {
				req.flash('errors', { msg: 'Account with the e-mail address already exists.' });
				return res.redirect('/signup');
			}

			user.save((err) => {
				if (err) {
					return next(err);
				}

				req.logIn(user, (err) => {
					if (err) {
						return next(err);
					}
					req.flash('success', { msg: 'You are successfully logged in now!' });
					res.redirect('/signup');
				});
			});
		});
	}
}

export default Register;

/**
 * Refresh JWToken
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import * as jwt from 'jsonwebtoken';

import User from '../../../models/User';

class RefreshToken {
	public static getToken (req): string {
		if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
			return req.headers.authorization.split(' ')[1];
		} else if (req.query && req.query.token) {
			return req.query.token;
		}

		return '';
	}

	public static perform (req, res): any {
		const _token = RefreshToken.getToken(req);
		if (_token === '') {
			return res.json({
				error: ['Invalid Token!']
			});
		}

		const decode = jwt.decode(
			_token,
			res.locals.app.appSecret,
			{ expiresIn: res.locals.app.jwtExpiresIn }
		);

		User.findOne({email: decode.email}, (err, user) => {
			if (err) {
				return res.json({
					error: err
				});
			}

			if (! user) {
				return res.json({
					error: ['User not found!']
				});
			}

			if (! user.password) {
				return res.json({
					error: ['Please login using your social creds']
				});
			}

			user.comparePassword(decode.password, (err, isMatch) => {
				if (err) {
					return res.json({
						error: err
					});
				}

				if (! isMatch) {
					return res.json({
						error: ['Password does not match!']
					});
				}

				const token = jwt.sign(
					{ email: decode.email, password: decode.password },
					res.locals.app.appSecret,
					{ expiresIn: res.locals.app.jwtExpiresIn * 60 }
				);

				// Hide protected columns
				user.tokens = undefined;
				user.password = undefined;

				return res.json({
					user,
					token,
					token_expires_in: res.locals.app.jwtExpiresIn * 60
				});
			});
		});
	}
}

export default RefreshToken;

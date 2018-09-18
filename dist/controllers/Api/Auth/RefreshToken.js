"use strict";
/**
 * Refresh JWToken
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const User_1 = require("../../../models/User");
class RefreshToken {
    static getToken(req) {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            return req.headers.authorization.split(' ')[1];
        }
        else if (req.query && req.query.token) {
            return req.query.token;
        }
        return '';
    }
    static perform(req, res) {
        const _token = RefreshToken.getToken(req);
        if (_token === '') {
            return res.json({
                error: ['Invalid Token!']
            });
        }
        const decode = jwt.decode(_token, res.locals.app.appSecret, { expiresIn: res.locals.app.jwtExpiresIn });
        User_1.default.findOne({ email: decode.email }, (err, user) => {
            if (err) {
                return res.json({
                    error: err
                });
            }
            if (!user) {
                return res.json({
                    error: ['User not found!']
                });
            }
            if (!user.password) {
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
                if (!isMatch) {
                    return res.json({
                        error: ['Password does not match!']
                    });
                }
                const token = jwt.sign({ email: decode.email, password: decode.password }, res.locals.app.appSecret, { expiresIn: res.locals.app.jwtExpiresIn * 60 });
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
exports.default = RefreshToken;
//# sourceMappingURL=RefreshToken.js.map
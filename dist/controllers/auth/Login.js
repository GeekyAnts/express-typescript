"use strict";
/**
 * Handles your login routes
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
class Login {
    static perform(req, res, next) {
        req.assert('email', 'E-mail cannot be blank').notEmpty();
        req.assert('email', 'E-mail is not valid').isEmail();
        req.assert('password', 'Password cannot be blank').notEmpty();
        req.assert('password', 'Password length must be atleast 8 characters').isLength({ min: 8 });
        req.sanitize('email').normalizeEmail({ gmail_remove_dots: false });
        const errors = req.validationErrors();
        if (errors) {
            req.flash('loginErrors', errors);
            return res.redirect('/#login');
        }
        passport.authenticate('local', (err, user, info) => {
            if (err) {
                return next(err);
            }
            if (!user) {
                console.log('error ', info);
                req.flash('loginErrors', info);
                return res.redirect('/#login');
            }
            req.logIn(user, (err) => {
                if (err) {
                    return next(err);
                }
                req.flash('loginSuccess', { msg: 'You are successfully logged in now!' });
                res.redirect('/#login');
            });
        })(req, res.next);
    }
}
exports.default = Login;
//# sourceMappingURL=Login.js.map
"use strict";
/**
 * Handles your login routes
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
const Log_1 = require("../../middlewares/Log");
class Login {
    static show(req, res) {
        return res.render('pages/login', {
            title: 'LogIn'
        });
    }
    static perform(req, res, next) {
        req.assert('email', 'E-mail cannot be blank').notEmpty();
        req.assert('email', 'E-mail is not valid').isEmail();
        req.assert('password', 'Password cannot be blank').notEmpty();
        req.assert('password', 'Password length must be atleast 8 characters').isLength({ min: 8 });
        req.sanitize('email').normalizeEmail({ gmail_remove_dots: false });
        const errors = req.validationErrors();
        if (errors) {
            req.flash('errors', errors);
            return res.redirect('/login');
        }
        Log_1.default.info('Here in the login controller #1!');
        passport.authenticate('local', (err, user, info) => {
            Log_1.default.info('Here in the login controller #2!');
            if (err) {
                return next(err);
            }
            if (!user) {
                req.flash('errors', info);
                return res.redirect('/login');
            }
            req.logIn(user, (err) => {
                if (err) {
                    return next(err);
                }
                req.flash('success', { msg: 'You are successfully logged in now!' });
                res.redirect('/account');
            });
        })(req, res, next);
    }
}
exports.default = Login;
//# sourceMappingURL=Login.js.map
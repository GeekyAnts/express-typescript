"use strict";
/**
 * Defines the passport config
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
const passport_local_1 = require("passport-local");
const User_1 = require("../models/User");
class Passport {
    static mountPackage(_express) {
        _express = _express.use(passport.initialize());
        _express = _express.use(passport.session());
        passport.serializeUser((user, done) => {
            done(null, user.id);
        });
        passport.deserializeUser((id, done) => {
            User_1.default.findById(id, (err, user) => {
                done(err, user);
            });
        });
        this.mountLocalStrategy();
        return _express;
    }
    static mountLocalStrategy() {
        passport.use(new passport_local_1.Strategy({ usernameField: 'email' }, (email, password, done) => {
            User_1.default.findOne({ email: email.toLowerCase() }, (err, user) => {
                if (err) {
                    return done(err);
                }
                if (!user) {
                    return done(null, false, { msg: `E-mail ${email} not found.` });
                }
                user.comparePassword(password, (_err, _isMatch) => {
                    if (_err) {
                        return done(_err);
                    }
                    if (_isMatch) {
                        return done(null, user);
                    }
                    return done(null, false, { msg: 'Invalid E-mail or password.' });
                });
            });
        }));
    }
    static isAuthenticated(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        req.flash('errors', { msg: 'Please Log-In to access any further!' });
        res.redirect('/login');
    }
    static isAuthorized(req, res, next) {
        const provider = req.path.split('/').slice(-1)[0];
        const token = req.user.tokens.find(token => token.kind === provider);
        if (token) {
            next();
        }
        else {
            res.redirect(`/auth/${provider}`);
        }
    }
}
exports.default = Passport;
//# sourceMappingURL=Passport.js.map
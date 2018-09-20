"use strict";
/**
 * Define passport's local strategy
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const passport_local_1 = require("passport-local");
const User_1 = require("../../models/User");
const Log_1 = require("../../middlewares/Log");
class Local {
    static init(_passport) {
        _passport.use(new passport_local_1.Strategy({ usernameField: 'email' }, (email, password, done) => {
            Log_1.default.info(`Email is ${email}`);
            Log_1.default.info(`Password is ${password}`);
            User_1.default.findOne({ email: email.toLowerCase() }, (err, user) => {
                Log_1.default.info(`user is ${user.email}`);
                Log_1.default.info(`error is ${err}`);
                if (err) {
                    return done(err);
                }
                if (!user) {
                    return done(null, false, { msg: `E-mail ${email} not found.` });
                }
                if (user && !user.password) {
                    return done(null, false, { msg: `E-mail ${email} was not registered with us using any password. Please use the appropriate providers to Log-In again!` });
                }
                Log_1.default.info('comparing password now!');
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
}
exports.default = Local;
//# sourceMappingURL=Local.js.map
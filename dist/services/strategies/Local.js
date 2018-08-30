"use strict";
/**
 * Define passport's local strategy
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const passport_local_1 = require("passport-local");
const User_1 = require("../../models/User");
class Local {
    static init(_passport) {
        _passport.use(new passport_local_1.Strategy({ usernameField: 'email' }, (email, password, done) => {
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
}
exports.default = Local;
//# sourceMappingURL=Local.js.map
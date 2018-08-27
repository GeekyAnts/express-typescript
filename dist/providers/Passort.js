"use strict";
/**
 * Defines the passport config
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
class Passport {
    constructor() {
        passport.serializeUser((user, done) => {
            done(null, user);
        });
        passport.deserializeUser((user, done) => {
            done(null, user);
        });
    }
    static boot(_express) {
        _express = _express.use(passport.initialize());
        _express = _express.use(passport.session());
        return _express;
    }
}
exports.default = Passport;
//# sourceMappingURL=Passort.js.map
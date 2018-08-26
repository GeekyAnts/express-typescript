"use strict";
/**
 * Define your passports
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
class Passport {
    constructor() {
        this.passport = passport;
        this.passport.serializeUser((user, done) => {
            done(null, user.id);
        });
        this.passport.deserializeUser((user, done) => {
            const err = '';
            done(err, user);
        });
        this.init();
    }
    init() {
        //
    }
}
exports.default = new Passport;
//# sourceMappingURL=Passport.js.map
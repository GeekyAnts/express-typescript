"use strict";
/**
 * Define Google OAuth2
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const passport_google_oauth20_1 = require("passport-google-oauth20");
const User_1 = require("../../models/User");
const Locals_1 = require("../../providers/Locals");
class Google {
    static init(_passport) {
        _passport.use(new passport_google_oauth20_1.Strategy({
            clientID: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: `${Locals_1.default.config().url}/auth/google/callback`,
            passReqToCallback: true
        }, (req, accessToken, refreshToken, profile, done) => {
            if (req.user) {
                User_1.default.findOne({ google: profile.id }, (err, existingUser) => {
                    if (err) {
                        return done(err);
                    }
                    if (existingUser) {
                        req.flash('errors', { msg: 'There is already a Google account that belongs to you. Sign in with that account or delete it, then link it with your current account.' });
                        return done(err);
                    }
                    else {
                        User_1.default.findById(req.user.id, (err, user) => {
                            if (err) {
                                return done(err);
                            }
                            user.google = profile.id;
                            user.tokens.push({ kind: 'google', accessToken });
                            user.fullname = user.fullname || profile.displayName;
                            user.gender = user.gender || profile._json.gender;
                            if (profile.photos) {
                                user.picture = user.picture || profile.photos[0].value;
                            }
                            user.save((err) => {
                                req.flash('info', { msg: 'Google account has been linked.' });
                                return done(err, user);
                            });
                        });
                    }
                });
            }
            else {
                User_1.default.findOne({ google: profile.id }, (err, existingUser) => {
                    if (err) {
                        return done(err);
                    }
                    if (existingUser) {
                        return done(null, existingUser);
                    }
                    User_1.default.findOne({ email: profile.emails[0].value }, (err, existingEmailUser) => {
                        if (err) {
                            return done(err);
                        }
                        if (existingEmailUser) {
                            req.flash('errors', { msg: 'There is already an account using this email address. Sing in to that accoount and link it with Google manually from Account Settings.' });
                            return done(err);
                        }
                        else {
                            const user = new User_1.default();
                            user.email = profile.emails[0].value;
                            user.google = profile.id;
                            user.tokens.push({ kind: 'google', accessToken });
                            user.fullname = user.fullname || profile.displayName;
                            user.gender = user.gender || profile._json.gender;
                            if (profile.photos) {
                                user.picture = user.picture || profile.photos[0].value;
                            }
                            user.save((err) => {
                                return done(err, user);
                            });
                        }
                    });
                });
            }
        }));
    }
}
exports.default = Google;
//# sourceMappingURL=Google.js.map
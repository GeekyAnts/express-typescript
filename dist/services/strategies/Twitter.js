"use strict";
/**
 * Define Google OAuth2
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const passport_twitter_1 = require("passport-twitter");
const User_1 = require("../../models/User");
const Locals_1 = require("../../providers/Locals");
class Twitter {
    static init(_passport) {
        _passport.use(new passport_twitter_1.Strategy({
            consumerKey: process.env.TWITTER_KEY,
            consumerSecret: process.env.TWITTER_SECRET,
            callbackURL: `${Locals_1.default.config().url}/auth/twitter/callback`,
            passReqToCallback: true
        }, (req, accessToken, tokenSecret, profile, done) => {
            if (req.user) {
                User_1.default.findOne({ twitter: profile.id }, (err, existingUser) => {
                    if (err) {
                        return done(err);
                    }
                    if (existingUser) {
                        req.flash('errors', { msg: 'There is already a Twitter account that belongs to you. Sign in with that account or delete it, then link it with your current account.' });
                        return done(err);
                    }
                    else {
                        User_1.default.findById(req.user.id, (err, user) => {
                            if (err) {
                                return done(err);
                            }
                            user.twitter = profile.id;
                            user.tokens.push({ kind: 'twitter', accessToken, tokenSecret });
                            user.fullname = user.fullname || profile.displayName;
                            user.geolocation = user.geolocation || profile._json.location;
                            user.picture = user.picture || profile._json.profile_image_url_https;
                            user.save((err) => {
                                if (err) {
                                    return done(err);
                                }
                                req.flash('info', { msg: 'Twitter account has been linked.' });
                                return done(err, user);
                            });
                        });
                    }
                });
            }
            else {
                User_1.default.findOne({ twitter: profile.id }, (err, existingUser) => {
                    if (err) {
                        return done(err);
                    }
                    if (existingUser) {
                        return done(null, existingUser);
                    }
                    const user = new User_1.default();
                    // Twitter does not provides the user's e-mail address.
                    // We can "fake" a twitter email address as follows:
                    user.email = `${profile.username}@twitter.com`;
                    user.twitter = profile.id;
                    user.tokens.push({ kind: 'twitter', accessToken, tokenSecret });
                    user.fullname = profile.displayName;
                    user.geolocation = profile._json.location;
                    user.picture = profile._json.profile_image_url_https;
                    user.save((err) => {
                        done(err, user);
                    });
                });
            }
        }));
    }
}
exports.default = Twitter;
//# sourceMappingURL=Twitter.js.map
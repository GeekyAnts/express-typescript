"use strict";
/**
 * Define all your routes
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
const express_1 = require("express");
const Cache_1 = require("./Cache");
const Passport_1 = require("./Passport");
const Home_1 = require("../controllers/Home");
const Register_1 = require("../controllers/Auth/Register");
const Login_1 = require("../controllers/Auth/Login");
const Logout_1 = require("../controllers/Auth/Logout");
const Account_1 = require("../controllers/Account");
const router = express_1.Router();
const cache = Cache_1.default.cache;
router.get('/', cache(10), Home_1.default.index);
router.get('/signup', Register_1.default.show);
router.post('/signup', Register_1.default.perform);
router.get('/login', Login_1.default.show);
router.post('/login', Login_1.default.perform);
router.get('/logout', Logout_1.default.perform);
router.get('/account', Passport_1.default.isAuthenticated, Account_1.default.index);
router.get('/oauth/google', passport.authenticate('google'));
router.get('/oauth/google/callback', passport.authenticate('google', { failureRedirect: '/#login' }), (req, res) => {
    res.redirect(req.originalUrl || req.url);
});
exports.default = router;
//# sourceMappingURL=Routes.js.map
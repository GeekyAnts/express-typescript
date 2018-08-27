"use strict";
/**
 * Define all your routes
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
const express_1 = require("express");
const Home_1 = require("../controllers/Home");
const Register_1 = require("../controllers/Auth/Register");
const Login_1 = require("../controllers/Auth/Login");
const Logout_1 = require("../controllers/Auth/Logout");
const router = express_1.Router();
router.get('/', Home_1.default.index);
router.post('/signup', Register_1.default.perform);
router.post('/login', Login_1.default.perform);
router.get('/logout', Logout_1.default.perform);
router.get('/oauth/google', passport.authenticate('google'));
router.get('/oauth/google/callback', passport.authenticate('google', { failureRedirect: '/#login' }), (req, res) => {
    res.redirect(req.originalUrl || req.url);
});
exports.default = router;
//# sourceMappingURL=Routes.js.map
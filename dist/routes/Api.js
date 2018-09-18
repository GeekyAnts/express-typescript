"use strict";
/**
 * Define all your API web-routes
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const expressJwt = require("express-jwt");
const Locals_1 = require("../providers/Locals");
const Home_1 = require("../controllers/Api/Home");
const Login_1 = require("../controllers/Api/Auth/Login");
const Register_1 = require("../controllers/Api/Auth/Register");
const RefreshToken_1 = require("../controllers/Api/Auth/RefreshToken");
const router = express_1.Router();
router.get('/', Home_1.default.index);
router.post('/auth/login', Login_1.default.perform);
router.post('/auth/register', Register_1.default.perform);
router.post('/auth/refresh-token', expressJwt({ secret: Locals_1.default.config().appSecret }), RefreshToken_1.default.perform);
exports.default = router;
//# sourceMappingURL=Api.js.map
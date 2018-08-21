"use strict";
/**
 * Define all your routes
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Home_1 = require("../controllers/Home");
const router = express_1.Router();
router.get('/', Home_1.default.index);
exports.default = router;
//# sourceMappingURL=Routes.js.map
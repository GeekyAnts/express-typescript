"use strict";
/**
 * Define all your API web-routes
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/', (req, res, next) => {
    res.json({ faiz: 'ahmed' });
});
exports.default = router;
//# sourceMappingURL=Api.js.map
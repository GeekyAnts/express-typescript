"use strict";
/**
 * Define all your routes
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Locals_1 = require("./Locals");
const Web_1 = require("./../routes/Web");
const Api_1 = require("./../routes/Api");
class Routes {
    static mountWeb(_express) {
        return _express.use('/', Web_1.default);
    }
    static mountApi(_express) {
        const apiPrefix = Locals_1.default.config().apiPrefix;
        return _express.use(`/${apiPrefix}`, Api_1.default);
    }
}
exports.default = Routes;
//# sourceMappingURL=Routes.js.map
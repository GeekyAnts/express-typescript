"use strict";
/**
 * Define all your routes
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Locals_1 = require("./Locals");
const Log_1 = require("../middlewares/Log");
const Web_1 = require("./../routes/Web");
const Api_1 = require("./../routes/Api");
class Routes {
    mountWeb(_express) {
        Log_1.default.info('Routes :: Mounting Web Routes...');
        return _express.use('/', Web_1.default);
    }
    mountApi(_express) {
        const apiPrefix = Locals_1.default.config().apiPrefix;
        Log_1.default.info('Routes :: Mounting API Routes...');
        return _express.use(`/${apiPrefix}`, Api_1.default);
    }
}
exports.default = new Routes;
//# sourceMappingURL=Routes.js.map
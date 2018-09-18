"use strict";
/**
 * Enables the CORS
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const cors = require("cors");
const Locals_1 = require("../providers/Locals");
class CORS {
    static mount(_express) {
        const options = {
            origin: Locals_1.default.config().url,
            optionsSuccessStatus: 200 // Some legacy browsers choke on 204
        };
        _express.use(cors(options));
        return _express;
    }
}
exports.default = CORS;
//# sourceMappingURL=CORS.js.map
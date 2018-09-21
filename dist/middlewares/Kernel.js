"use strict";
/**
 * Register your Express middlewares
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const CORS_1 = require("./CORS");
const Http_1 = require("./Http");
const Views_1 = require("./Views");
const Statics_1 = require("./Statics");
const CsrfToken_1 = require("./CsrfToken");
const StatusMonitor_1 = require("./StatusMonitor");
const Locals_1 = require("../providers/Locals");
class Kernel {
    static init(_express) {
        // Check if CORS is enabled
        if (Locals_1.default.config().isCORSEnabled) {
            // Mount CORS middleware
            _express = CORS_1.default.mount(_express);
        }
        // Mount basic express apis middleware
        _express = Http_1.default.mount(_express);
        // Mount csrf token verification middleware
        _express = CsrfToken_1.default.mount(_express);
        // Mount view engine middleware
        _express = Views_1.default.mount(_express);
        // Mount statics middleware
        _express = Statics_1.default.mount(_express);
        // Mount status monitor middleware
        _express = StatusMonitor_1.default.mount(_express);
        return _express;
    }
}
exports.default = Kernel;
//# sourceMappingURL=Kernel.js.map
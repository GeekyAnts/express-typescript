"use strict";
/**
 * Register your Express middlewares
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Http_1 = require("./Http");
const Views_1 = require("./Views");
const Statics_1 = require("./Statics");
const CsrfToken_1 = require("./CsrfToken");
class Kernel {
    static init(_express) {
        // Mount basic express apis middleware
        _express = Http_1.default.mountExpressAPIs(_express);
        // Mount csrf token verification middleware
        _express = CsrfToken_1.default.mountVerifyCsrf(_express);
        // Mount view engine middleware
        _express = Views_1.default.mountView(_express);
        // Mount statics middleware
        _express = Statics_1.default.mountStatics(_express);
        return _express;
    }
}
exports.default = Kernel;
//# sourceMappingURL=Kernel.js.map
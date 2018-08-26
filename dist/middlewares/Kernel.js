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
class Kernel {
    static init(_express) {
        _express = Http_1.default.mountExpressAPIs(_express);
        _express = Views_1.default.mountView(_express);
        _express = Statics_1.default.mountStatics(_express);
        return _express;
    }
}
exports.default = Kernel;
//# sourceMappingURL=Kernel.js.map
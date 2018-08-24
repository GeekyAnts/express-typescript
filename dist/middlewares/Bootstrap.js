"use strict";
/**
 * Register your Express middlewares
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const cors = require("cors");
const path = require("path");
const express = require("express");
const compress = require("compression");
class Bootstrap {
    static mountExpressAPIs(_express) {
        // Enables the CORS
        _express.use(cors());
        // Enables the "gzip" / "deflate" compression for response
        _express.use(compress());
        return _express;
    }
    static mountView(_express) {
        _express.set('view engine', 'pug');
        _express.set('view options', { pretty: true });
        _express.set('views', path.join(__dirname, '../../views'));
        _express.locals.pretty = true;
        return _express;
    }
    static mountStatics(_express) {
        // Load Statics
        _express.use('/public', express.static(path.join(__dirname, '../../public'), { maxAge: 31557600000 }));
        // Load NPM Statics
        _express.use('/vendor', express.static(path.join(__dirname, '../../node_modules')));
        return _express;
    }
    static init(_express) {
        _express = this.mountExpressAPIs(_express);
        _express = this.mountView(_express);
        _express = this.mountStatics(_express);
        return _express;
    }
}
exports.default = Bootstrap;
//# sourceMappingURL=Bootstrap.js.map
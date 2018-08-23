"use strict";
/**
 * Register your Express middlewares
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
require("marko/node-require");
const express = require("express");
const path = require("path");
const lasso = require("lasso");
const cors = require("cors");
const compress = require("compression");
const markoExpress = require("marko/express");
const lassoMiddleware = require("lasso/middleware");
const Lasso_1 = require("../config/Lasso");
class Bootstrap {
    static mountExpressAPIs(_express) {
        // Enables the CORS
        _express.use(cors());
        // Enables the "gzip" / "deflate" compression for response
        _express.use(compress());
        return _express;
    }
    static mountMarko(_express) {
        // Configure lasso to control how JS/CSS/etc. is delivered to the browser
        lasso.configure(Lasso_1.default.init());
        // Register Lasso Static Middleware
        _express.use(lassoMiddleware.serveStatic());
        // Set the view folder path & view engine
        _express.use(markoExpress());
        return _express;
    }
    static mountStatics(_express) {
        // Load Statics
        _express.use('/public', express.static(path.join(__dirname, '../../public'), { maxAge: 31557600000 }));
        // Load NPM Statics
        _express.use('/node_modules', express.static(path.join(__dirname, '../../node_modules')));
        return _express;
    }
    static init(_express) {
        _express = this.mountExpressAPIs(_express);
        _express = this.mountMarko(_express);
        _express = this.mountStatics(_express);
        return _express;
    }
}
exports.default = Bootstrap;
//# sourceMappingURL=Bootstrap.js.map
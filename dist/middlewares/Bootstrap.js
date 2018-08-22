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
class Bootstrap {
    static init(_express) {
        // Enables the CORS
        _express.use(cors());
        // Enables the "gzip" / "deflate" compression for response
        _express.use(compress());
        // markoNode.install()
        // Configure lasso to control how JS/CSS/etc. is delivered to the browser
        lasso.configure({
            plugins: [
                'lasso-marko' // Allow Marko templates to be compiled and transported to the browser
            ],
            outputDir: path.join(__dirname, '../../public/static'),
            urlPrefix: "/public/static",
            bundlingEnabled: true,
            minify: true,
            fingerprintsEnabled: true,
        });
        _express.use(require('lasso/middleware').serveStatic());
        // Set the view folder path & view engine
        _express.use(markoExpress());
        // Load Statics
        _express.use('/public', express.static(path.join(__dirname, '../../public'), { maxAge: 31557600000 }));
        return _express;
    }
}
exports.default = Bootstrap;
//# sourceMappingURL=Bootstrap.js.map
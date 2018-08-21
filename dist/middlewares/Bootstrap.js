"use strict";
/**
 * Register your Express middlewares
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
require("marko/node-require");
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
        // Configure lasso to control how JS/CSS/etc. is delivered to the browser
        lasso.configure({
            plugins: [
                'lasso-marko' // Allow Marko templates to be compiled and transported to the browser
            ],
            outputDir: path.join(__dirname, '../../public/static'),
            bundlingEnabled: true,
            minify: true,
            fingerprintsEnabled: true,
        });
        // Set the view folder path & view engine
        _express.use(markoExpress());
        return _express;
    }
}
exports.default = Bootstrap;
//# sourceMappingURL=Bootstrap.js.map
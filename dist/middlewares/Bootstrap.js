"use strict";
/**
 * Register your Express middlewares
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const cors = require("cors");
const compress = require("compression");
class Bootstrap {
    static init(_express) {
        // Enables the CORS
        _express.use(cors());
        // Enables the "gzip" / "deflate" compression for response
        _express.use(compress());
        // Set the view folder path & view engine
        _express.set('views', path.join(__dirname, '/../../views'));
        _express.set('view engine', 'ejs');
        return _express;
    }
}
exports.default = Bootstrap;
//# sourceMappingURL=Bootstrap.js.map
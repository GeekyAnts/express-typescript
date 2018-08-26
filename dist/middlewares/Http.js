"use strict";
/**
 * Defines all the requisites in HTTP
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const cors = require("cors");
const compress = require("compression");
const bodyParser = require("body-parser");
const session = require("express-session");
class Http {
    static mountExpressAPIs(_express) {
        // Enables the request body parser
        _express.use(bodyParser.json());
        _express.use(bodyParser.urlencoded({ extended: false }));
        // Enables the session store
        _express.use(session({
            secret: process.env.APP_SECRET,
            resave: false,
            saveUninitialized: false
        }));
        // Enables the CORS
        _express.use(cors());
        // Enables the "gzip" / "deflate" compression for response
        _express.use(compress());
        return _express;
    }
}
exports.default = Http;
//# sourceMappingURL=Http.js.map
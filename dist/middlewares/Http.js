"use strict";
/**
 * Defines all the requisites in HTTP
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const cors = require("cors");
const flash = require("express-flash");
const compress = require("compression");
const bodyParser = require("body-parser");
const session = require("express-session");
const expressValidator = require("express-validator");
const Locals_1 = require("../providers/Locals");
const Passport_1 = require("../providers/Passport");
class Http {
    static mountExpressAPIs(_express) {
        // Enables the request body parser
        _express.use(bodyParser.json());
        _express.use(bodyParser.urlencoded({ extended: false }));
        // Disable the x-powered-by header in response
        _express.disable('x-powered-by');
        // Enables the request validator
        _express.use(expressValidator());
        // Enables the request flash messages
        _express.use(flash());
        /**
         * Enables the session store
         *
         * Note: You can also add redis-store
         * into the options object.
         */
        const options = {
            secret: Locals_1.default.config().appSecret,
            resave: false,
            saveUninitialized: false,
            cookie: {
                maxAge: 1209600000 // two weeks (in ms)
            }
        };
        _express.use(session(options));
        // Enables the CORS
        _express.use(cors());
        // Enables the "gzip" / "deflate" compression for response
        _express.use(compress());
        // Loads the passport configuration
        _express = Passport_1.default.mountPackage(_express);
        return _express;
    }
}
exports.default = Http;
//# sourceMappingURL=Http.js.map
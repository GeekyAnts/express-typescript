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
const connect = require("connect-mongo");
const bodyParser = require("body-parser");
const session = require("express-session");
const expressValidator = require("express-validator");
const Log_1 = require("./Log");
const Locals_1 = require("../providers/Locals");
const Passport_1 = require("../providers/Passport");
const MongoStore = connect(session);
class Http {
    static mount(_express) {
        Log_1.default.info('Booting the \'HTTP\' middleware...');
        // Enables the request body parser
        _express.use(bodyParser.json({
            limit: Locals_1.default.config().maxUploadLimit
        }));
        _express.use(bodyParser.urlencoded({
            limit: Locals_1.default.config().maxUploadLimit,
            parameterLimit: Locals_1.default.config().maxParameterLimit,
            extended: false
        }));
        // Disable the x-powered-by header in response
        _express.disable('x-powered-by');
        // Enables the request payload validator
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
            resave: true,
            saveUninitialized: true,
            secret: Locals_1.default.config().appSecret,
            cookie: {
                maxAge: 1209600000 // two weeks (in ms)
            },
            store: new MongoStore({
                url: process.env.MONGOOSE_URL,
                autoReconnect: true
            })
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
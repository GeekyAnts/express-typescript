"use strict";
/**
 * Primary file for your Clustered API Server
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Bootstrap_1 = require("../middlewares/Bootstrap");
const Locals_1 = require("../middlewares/Locals");
const Routes_1 = require("./Routes");
class Express {
    /**
     * Initializes the express server
     */
    constructor() {
        this.express = express();
        this.mountMiddlewares();
        this.mountRoutes();
    }
    /**
     * Mounts all the defined middlewares
     */
    mountMiddlewares() {
        this.express = Locals_1.default.init(this.express);
        this.express = Bootstrap_1.default.init(this.express);
    }
    /**
     * Mounts all the defined routes
     */
    mountRoutes() {
        this.express.use('/', Routes_1.default);
    }
    /**
     * Starts the express server
     */
    init() {
        this.express.listen(process.env.PORT, _error => {
            if (_error) {
                return console.log('Error: ', _error);
            }
            return console.log('\x1b[36m%s\x1b[0m', `Server is running on port '${process.env.PORT}'`);
        });
    }
}
/** Export the express module */
exports.default = new Express();
//# sourceMappingURL=Express.js.map
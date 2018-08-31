"use strict";
/**
 * Primary file for your Clustered API Server
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Kernel_1 = require("../middlewares/Kernel");
const Handler_1 = require("../exception/Handler");
const Locals_1 = require("./Locals");
const Routes_1 = require("./Routes");
class Express {
    /**
     * Initializes the express server
     */
    constructor() {
        this.express = express();
        this.mountDotEnv();
        this.mountMiddlewares();
        this.mountRoutes();
    }
    mountDotEnv() {
        this.express = Locals_1.default.init(this.express);
    }
    /**
     * Mounts all the defined middlewares
     */
    mountMiddlewares() {
        this.express = Kernel_1.default.init(this.express);
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
        // Registering Exception / Error Handlers
        this.express.use(Handler_1.default.logErrors);
        // this.express.use(ExceptionHandler.clientErrorHandler);
        // this.express.use(ExceptionHandler.errorHandler);
        // Start the server on the specified port
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
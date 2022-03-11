"use strict";
/**
 * Primary file for your Clustered API Server
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Locals_1 = require("./Locals");
const Routes_1 = require("./Routes");
const Kernel_1 = require("../middlewares/Kernel");
const Handler_1 = require("../exception/Handler");
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
        this.express = Routes_1.default.mountWeb(this.express);
        this.express = Routes_1.default.mountApi(this.express);
    }
    /**
     * Starts the express server
     */
    init() {
        const port = Locals_1.default.config().port;
        // Registering Exception / Error Handlers
        this.express.use(Handler_1.default.logErrors);
        this.express.use(Handler_1.default.clientErrorHandler);
        this.express.use(Handler_1.default.errorHandler);
        this.express = Handler_1.default.notFoundHandler(this.express);
        // Start the server on the specified port
        this.express.listen(port, () => {
            return console.log('\x1b[33m%s\x1b[0m', `Server :: Running @ 'http://localhost:${port}'`);
        }).on('error', (_error) => {
            return console.log('Error: ', _error.message);
        });
        ;
    }
}
/** Export the express module */
exports.default = new Express();
//# sourceMappingURL=Express.js.map
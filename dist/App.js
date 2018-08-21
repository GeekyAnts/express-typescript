"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class App {
    constructor() {
        this.express = express();
        this.router = express.Router();
        this.mountRoutes();
    }
    mountRoutes() {
        this.router.get('/', (req, res) => {
            res.json({
                message: 'Hello, World!'
            });
        });
        this.express.use('/', this.router);
    }
    init() {
        this.express.listen(process.env.PORT, (_error) => {
            if (_error) {
                return console.log("error");
            }
            return console.log(`Server is running on port ${process.env.PORT}`);
        });
    }
}
exports.default = new App();
//# sourceMappingURL=App.js.map
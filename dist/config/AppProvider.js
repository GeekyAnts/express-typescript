"use strict";
/**
 * Primary file for your Clustered API Server
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const os = require("os");
const dotenv = require("dotenv");
const cluster = require("cluster");
const Express_1 = require("./Express");
class App {
    static loadConfiguration() {
        dotenv.config();
    }
    static loadServer() {
        if (cluster.isMaster) {
            for (let i = 0; i < os.cpus().length; i += 1) {
                cluster.fork();
            }
        }
        else {
            Express_1.default.init();
        }
    }
}
exports.default = App;
//# sourceMappingURL=AppProvider.js.map
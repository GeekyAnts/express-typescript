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
const path = require("path");
const Express_1 = require("./Express");
const Database_1 = require("./Database");
class App {
    static loadConfiguration() {
        dotenv.config({ path: path.join(__dirname, '../../.env') });
    }
    static loadServer() {
        if (cluster.isMaster) {
            for (let i = 0; i < os.cpus().length; i += 1) {
                cluster.fork();
            }
        }
        else {
            Express_1.default.init();
            Database_1.Database.init();
        }
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map
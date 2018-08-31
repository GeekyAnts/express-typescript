"use strict";
/**
 * Primary file for your Clustered API Server
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const os = require("os");
const path = require("path");
const dotenv = require("dotenv");
const cluster = require("cluster");
const Express_1 = require("./Express");
const Database_1 = require("./Database");
class App {
    // Loads your dotenv file
    static loadConfiguration() {
        dotenv.config({ path: path.join(__dirname, '../../.env') });
    }
    // Cluster's your server
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
    // Loads the Database Pool
    static loadDatabase() {
        Database_1.Database.init();
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map
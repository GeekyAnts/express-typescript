"use strict";
/**
 * Primary file for your Clustered API Server
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const dotenv = require("dotenv");
const Express_1 = require("./Express");
const Database_1 = require("./Database");
const jobs_1 = require("../jobs");
const Log_1 = require("../middlewares/Log");
class App {
    // Clear the console
    clearConsole() {
        process.stdout.write('\x1B[2J\x1B[0f');
    }
    // Loads your dotenv file
    loadConfiguration() {
        Log_1.default.info('Configuration :: Booting @ Master...');
        dotenv.config({ path: path.join(__dirname, '../../.env') });
    }
    // Loads your Server
    loadServer() {
        Log_1.default.info('Server :: Booting @ Master...');
        Express_1.default.init();
    }
    // Loads the Database Pool
    loadDatabase() {
        Log_1.default.info('Database :: Booting @ Master...');
        Database_1.Database.init();
    }
    // Loads the Worker Cluster
    loadWorker() {
        Log_1.default.info('Worker :: Booting @ Master...');
        setInterval(() => jobs_1.default.init(), 1000);
    }
}
exports.default = new App;
//# sourceMappingURL=App.js.map
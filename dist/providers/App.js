"use strict";
/**
 * Primary file for your Clustered API Server
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const kue = require("kue");
const path = require("path");
const dotenv = require("dotenv");
const Express_1 = require("./Express");
const Database_1 = require("./Database");
const Queue_1 = require("./Queue");
const Locals_1 = require("./Locals");
const Log_1 = require("../middlewares/Log");
class App {
    // Clear the console
    clearConsole() {
        process.stdout.write('\x1B[2J\x1B[0f');
        Queue_1.default.dispatch('checkout', { foo: 'bar', fizz: 'buzz' }, function (data) {
            console.log('>> here is the data', data);
        });
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
    }
    // Loads the Queue Monitor
    loadQueue() {
        const isQueueMonitorEnabled = Locals_1.default.config().queueMonitor;
        const queueMonitorPort = Locals_1.default.config().queueMonitorHttpPort;
        if (isQueueMonitorEnabled) {
            kue.app.listen(queueMonitorPort);
            console.log('\x1b[33m%s\x1b[0m', `Queue Monitor :: Running @ 'http://localhost:${queueMonitorPort}'`);
        }
    }
}
exports.default = new App;
//# sourceMappingURL=App.js.map
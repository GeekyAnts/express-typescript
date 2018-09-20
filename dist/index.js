"use strict";
/**
 * Bootstrap your App
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const os = require("os");
const cluster = require("cluster");
const App_1 = require("./providers/App");
const Log_1 = require("./middlewares/Log");
if (cluster.isMaster) {
    /**
     * Clear the console before the app runs
     */
    App_1.default.clearConsole();
    /**
     * Load Configuration
     */
    App_1.default.loadConfiguration();
    /**
     * Run the Database pool
     */
    App_1.default.loadDatabase();
    /**
     * Run the Worker every minute
     * Note: we normally start worker after
     * the entire app is loaded
     */
    setTimeout(() => App_1.default.loadWorker(), 1000 * 60);
    /**
     * Find the number of available CPUS
     */
    const CPUS = os.cpus();
    /**
     * Fork the process, the number of times we have CPUs available
     */
    CPUS.forEach(() => cluster.fork());
    cluster.on('listening', (worker) => Log_1.default.info(`Server :: Cluster with ProcessID '${worker.process.pid}' Connected`));
    cluster.on('disconnect', (worker) => Log_1.default.info(`Server :: Cluster with ProcessID '${worker.process.pid}' Disconnected`));
    cluster.on('exit', (worker) => {
        Log_1.default.info(`Server :: Cluster with ProcessID '${worker.process.pid}' is Dead`);
        // Ensuring a new cluster will start if an old one dies
        cluster.fork();
    });
}
else {
    /**
     * Run the Server on Clusters
     */
    App_1.default.loadServer();
}
//# sourceMappingURL=index.js.map
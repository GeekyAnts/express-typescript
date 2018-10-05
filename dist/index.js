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
const NativeEvent_1 = require("./exception/NativeEvent");
if (cluster.isMaster) {
    /**
     * Catches the process events
     */
    NativeEvent_1.default.process();
    /**
     * Clear the console before the app runs
     */
    App_1.default.clearConsole();
    /**
     * Load Configuration
     */
    App_1.default.loadConfiguration();
    /**
     * Find the number of available CPUS
     */
    const CPUS = os.cpus();
    /**
     * Fork the process, the number of times we have CPUs available
     */
    CPUS.forEach(() => cluster.fork());
    /**
     * Catches the cluster events
     */
    NativeEvent_1.default.cluster(cluster);
    /**
     * Loads the Queue Monitor iff enabled
     */
    App_1.default.loadQueue();
    /**
     * Run the Worker every minute
     * Note: we normally start worker after
     * the entire app is loaded
     */
    setTimeout(() => App_1.default.loadWorker(), 1000 * 60);
}
else {
    /**
     * Run the Database pool
     */
    App_1.default.loadDatabase();
    /**
     * Run the Server on Clusters
     */
    App_1.default.loadServer();
}
//# sourceMappingURL=index.js.map
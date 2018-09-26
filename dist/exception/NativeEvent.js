"use strict";
/**
 * Catch all your node env's native event
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Log_1 = require("../middlewares/Log");
class NativeEvent {
    cluster(_cluster) {
        // Catch cluster listening event...
        _cluster.on('listening', (worker) => Log_1.default.info(`Server :: Cluster with ProcessID '${worker.process.pid}' Connected!`));
        // Catch cluster once it is back online event...
        _cluster.on('online', (worker) => Log_1.default.info(`Server :: Cluster with ProcessID '${worker.process.pid}' has responded after it was forked! `));
        // Catch cluster disconnect event...
        _cluster.on('disconnect', (worker) => Log_1.default.info(`Server :: Cluster with ProcessID '${worker.process.pid}' Disconnected!`));
        // Catch cluster exit event...
        _cluster.on('exit', (worker, code, signal) => {
            Log_1.default.info(`Server :: Cluster with ProcessID '${worker.process.pid}' is Dead with Code '${code}, and signal: '${signal}'`);
            // Ensuring a new cluster will start if an old one dies
            _cluster.fork();
        });
    }
    process() {
        // Catch the Process's uncaught-exception
        process.on('uncaughtException', (exception) => Log_1.default.error(exception.stack));
        // Catch the Process's warning event
        process.on('warning', (warning) => Log_1.default.warn(warning.stack));
    }
}
exports.default = new NativeEvent;
//# sourceMappingURL=NativeEvent.js.map
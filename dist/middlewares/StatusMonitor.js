"use strict";
/**
 * Define & configure your status monitor
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const expressStatusMonitor = require("express-status-monitor");
const Log_1 = require("./Log");
const Locals_1 = require("../providers/Locals");
class StatusMonitor {
    mount(_express) {
        Log_1.default.info('Booting the \'StatusMonitor\' middleware...');
        const api = Locals_1.default.config().apiPrefix;
        // Define your status monitor config
        const monitorOptions = {
            title: Locals_1.default.config().name,
            path: '/status-monitor',
            spans: [
                {
                    interval: 1,
                    retention: 60 // Keep 60 data-points in memory
                },
                {
                    interval: 5,
                    retention: 60
                },
                {
                    interval: 15,
                    retention: 60
                }
            ],
            chartVisibility: {
                mem: true,
                rps: true,
                cpu: true,
                load: true,
                statusCodes: true,
                responseTime: true
            },
            healthChecks: [
                {
                    protocol: 'http',
                    host: 'localhost',
                    path: '/',
                    port: '4040'
                },
                {
                    protocol: 'http',
                    host: 'localhost',
                    path: `/${api}`,
                    port: '4040'
                }
            ]
        };
        // Loads the express status monitor middleware
        _express.use(expressStatusMonitor(monitorOptions));
        return _express;
    }
}
exports.default = new StatusMonitor;
//# sourceMappingURL=StatusMonitor.js.map
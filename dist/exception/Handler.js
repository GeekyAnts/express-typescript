"use strict";
/**
 * Define the error & exception handlers
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Log_1 = require("../middlewares/Log");
const Locals_1 = require("../providers/Locals");
class Handler {
    /**
     * Handles all the not found routes
     */
    static notFoundHandler(_express) {
        const apiPrefix = Locals_1.default.config().apiPrefix;
        _express.use('*', (req, res) => {
            const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            Log_1.default.error(`Path '${req.originalUrl}' not found [IP: '${ip}']!`);
            if (req.xhr || req.originalUrl.includes(`/${apiPrefix}/`)) {
                return res.json({
                    error: 'Page Not Found'
                });
            }
            else {
                res.status(404);
                return res.render('pages/error', {
                    title: 'Page Not Found',
                    error: []
                });
            }
        });
        return _express;
    }
    /**
     * Handles your api/web routes errors/exception
     */
    static clientErrorHandler(err, req, res, next) {
        Log_1.default.error(err.stack);
        if (req.xhr) {
            return res.status(500).send({ error: 'Something went wrong!' });
        }
        else {
            return next(err);
        }
    }
    /**
     * Show undermaintenance page incase of errors
     */
    static errorHandler(err, req, res, next) {
        Log_1.default.error(err.stack);
        res.status(500);
        const apiPrefix = Locals_1.default.config().apiPrefix;
        if (req.originalUrl.includes(`/${apiPrefix}/`)) {
            if (err.name && err.name === 'UnauthorizedError') {
                const innerMessage = err.inner && err.inner.message ? err.inner.message : undefined;
                return res.json({
                    error: [
                        'Invalid Token!',
                        innerMessage
                    ]
                });
            }
            return res.json({
                error: err
            });
        }
        return res.render('pages/error', { error: err.stack, title: 'Under Maintenance' });
    }
    /**
     * Register your error / exception monitoring
     * tools right here ie. before "next(err)"!
     */
    static logErrors(err, req, res, next) {
        Log_1.default.error(err.stack);
        return next(err);
    }
}
exports.default = Handler;
//# sourceMappingURL=Handler.js.map
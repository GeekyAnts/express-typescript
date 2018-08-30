"use strict";
/**
 * Define the error & exception handlers
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Handler {
    static clientErrorHandler(err, req, res, next) {
        /**
         * Handles your api/web routes errors/exception
         */
        if (req.xhr) {
            res.status(500).send({ error: 'Something went wrong!' });
        }
        else {
            next(err);
        }
    }
    static errorHandler(err, req, res, next) {
        /**
         * Show undermaintenance page incase of errors
         */
        res.status(500);
        res.render('pages/error', { errors: err.stack, title: 'Under Maintenance' });
    }
    static logErrors(err, req, res, next) {
        /**
         * Register your error / exception monitoring
         * tools right here ie. before "next(err)"!
         */
        next(err);
    }
}
exports.default = Handler;
//# sourceMappingURL=Handler.js.map
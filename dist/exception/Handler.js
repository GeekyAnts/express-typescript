"use strict";
/**
 * Define the error & exception handlers
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Handler {
    static notFoundHandler(_express) {
        /**
         * Handles all the not found routes
         */
        _express.use('*', function (req, res) {
            res.status(404);
            res.render('pages/error', {
                title: 'Page Not Found',
                errors: []
            });
        });
        return _express;
    }
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
        console.log(err);
        console.log(err.stack);
        next(err);
    }
}
exports.default = Handler;
//# sourceMappingURL=Handler.js.map
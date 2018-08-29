"use strict";
/**
 * Define the error & exception handlers
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Handler {
    static clientErrorHandler(err, req, res, next) {
        if (req.xhr) {
            res.status(500).send({ error: 'Something went wrong!' });
        }
        else {
            next(err);
        }
    }
    static errorHandler(err, req, res, next) {
        res.status(500);
        res.render('pages/error', { errors: err.stack, title: 'Under Maintenance' });
    }
    static logErrors(err, req, res, next) {
        next(err);
    }
}
exports.default = Handler;
//# sourceMappingURL=Handler.js.map
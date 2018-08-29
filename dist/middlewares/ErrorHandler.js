"use strict";
/**
 * Define the error & exception handlers
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorHandler {
    static clientErrorHandler(err, req, res, next) {
        console.log('>> inside clientErrorHandler');
        if (req.xhr) {
            res.status(500).send({ error: 'Something went wrong!' });
        }
        else {
            next(err);
        }
    }
    static errorHandler(err, req, res, next) {
        console.log('>> inside errorHandler');
        res.status(500);
        res.render('pages/error', { error: err });
    }
    static logErrors(err, req, res, next) {
        console.log('>> inside logErrors');
        console.error(err.stack);
        next(err);
    }
    static mountHandlers(_express) {
        _express = _express.use(this.logErrors);
        _express = _express.use(this.clientErrorHandler);
        _express = _express.use(this.errorHandler);
        return _express;
    }
}
exports.default = ErrorHandler;
//# sourceMappingURL=ErrorHandler.js.map
"use strict";
/**
 * Defines the view engines
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const Log_1 = require("./Log");
class Views {
    static mount(_express) {
        Log_1.default.info('Booting the \'Views\' middleware...');
        _express.set('view engine', 'pug');
        _express.set('view options', { pretty: true });
        _express.set('views', path.join(__dirname, '../../views'));
        _express.locals.pretty = true;
        return _express;
    }
}
exports.default = Views;
//# sourceMappingURL=Views.js.map
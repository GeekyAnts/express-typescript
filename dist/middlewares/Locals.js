"use strict";
/**
 * Define App Locals
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Locals {
    static init(_express) {
        const name = process.env.APP_NAME || `NodeTS Dashboard`;
        const url = process.env.APP_URL || `http://localhost:${process.env.PORT}`;
        const year = (new Date()).getFullYear();
        const copyright = `Copyright ${year} ${name} | All Rights Reserved`;
        const company = process.env.COMPANY_NAME || `GeekyAnts`;
        _express.locals.app = {
            name,
            company,
            url,
            copyright
        };
        return _express;
    }
}
exports.default = Locals;
//# sourceMappingURL=Locals.js.map
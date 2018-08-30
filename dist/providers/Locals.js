"use strict";
/**
 * Define App Locals & Configs
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const dotenv = require("dotenv");
class Locals {
    /**
     * Makes env configs available for your app
     * throughout the app's runtime
     */
    static config() {
        dotenv.config({ path: path.join(__dirname, '../../.env') });
        const name = process.env.APP_NAME || 'NodeTS Dashboard';
        const url = process.env.APP_URL || `http://localhost:${process.env.PORT}`;
        const year = (new Date()).getFullYear();
        const copyright = `Copyright ${year} ${name} | All Rights Reserved`;
        const company = process.env.COMPANY_NAME || 'GeekyAnts';
        const description = process.env.APP_DESCRIPTION || 'Here goes the app description';
        const appSecret = process.env.APP_SECRET || 'This is your responsibility!';
        const mongooseUrl = process.env.MONGOOSE_URL;
        return {
            name,
            company,
            url,
            copyright,
            description,
            appSecret,
            mongooseUrl
        };
    }
    /**
     * Injects your config to the app's locals
     */
    static init(_express) {
        _express.locals.app = this.config();
        return _express;
    }
}
exports.default = Locals;
//# sourceMappingURL=Locals.js.map
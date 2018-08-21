"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *	Handler for Home
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
const template = require("../../views/home.marko");
class Home {
    static index(req, res) {
        res.marko(template, {
            locals: res.app.locals.app,
            title: 'Home'
        });
    }
}
exports.default = Home;
//# sourceMappingURL=Home.js.map
"use strict";
/**
 *	Handler for Home
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Home {
    static index(req, res) {
        res.render('home', {
            locals: res.app.locals.app,
            title: 'Home'
        });
    }
}
exports.default = Home;
//# sourceMappingURL=Home.js.map
"use strict";
/**
 * Handler for Account
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    static index(req, res) {
        return res.render('pages/dashboard', {
            title: 'Home'
        });
    }
}
exports.default = Account;
//# sourceMappingURL=Account.js.map
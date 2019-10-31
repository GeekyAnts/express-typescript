"use strict";
/**
 * Handles the logout request
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Logout {
    static perform(req, res) {
        req.logout();
        req.session.destroy((err) => {
            if (err) {
                console.log('Error : Failed to destroy the session during logout.', err);
            }
            req.user = null;
            return res.redirect('/');
        });
    }
}
exports.default = Logout;
//# sourceMappingURL=Logout.js.map
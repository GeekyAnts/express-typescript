"use strict";
/**
 * Handle all your social auth routesß
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Social {
    static googleCallback(req, res) {
        return res.redirect('/account');
    }
}
exports.default = Social;
//# sourceMappingURL=Social.js.map
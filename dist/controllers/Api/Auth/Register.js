"use strict";
/**
 * Define the Register API logic
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../../../models/User");
class Register {
    static perform(req, res) {
        req.assert('email', 'E-mail cannot be blank').notEmpty();
        req.assert('email', 'E-mail is not valid').isEmail();
        req.assert('password', 'Password cannot be blank').notEmpty();
        req.assert('password', 'Password length must be atleast 8 characters').isLength({ min: 8 });
        req.assert('confirmPassword', 'Confirmation Password cannot be blank').notEmpty();
        req.assert('confirmPassword', 'Password & Confirmation password does not match').equals(req.body.password);
        req.sanitize('email').normalizeEmail({ gmail_remove_dots: false });
        const errors = req.validationErrors();
        if (errors) {
            return res.json({
                error: errors
            });
        }
        const _email = req.body.email;
        const _password = req.body.password;
        const user = new User_1.default({
            email: _email,
            password: _password
        });
        User_1.default.findOne({ email: _email }, (err, existingUser) => {
            if (err) {
                return res.json({
                    error: err
                });
            }
            if (existingUser) {
                return res.json({
                    error: ['Account with the e-mail address already exists.']
                });
            }
            user.save((err) => {
                if (err) {
                    return res.json({
                        error: err
                    });
                }
                return res.json({
                    message: ['You have been successfully registered with us!']
                });
            });
        });
    }
}
exports.default = Register;
//# sourceMappingURL=Register.js.map
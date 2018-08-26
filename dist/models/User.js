"use strict";
/**
 * Define User model
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt-nodejs");
const mongoose_1 = require("mongoose");
const Database_1 = require("../config/Database");
// Define the User Schema
exports.UserSchema = new mongoose_1.Schema({
    email: { type: String, unique: true },
    password: { type: String },
    passwordResetToken: { type: String },
    passwordResetExpires: Date,
    facebook: { type: String },
    twitter: { type: String },
    google: { type: String },
    github: { type: String },
    instagram: { type: String },
    linkedin: { type: String },
    steam: { type: String },
    tokens: { type: String },
    fullname: { type: String },
    gender: { type: String },
    geolocation: { type: String },
    website: { type: String },
    picture: { type: String }
}, {
    timestamps: true
});
// Password hash middleware
exports.UserSchema.pre('save', function (_next) {
    const user = this;
    if (!user.isModified('password')) {
        _next();
    }
    bcrypt.genSalt(10, (_err, _salt) => {
        if (_err) {
            _next(_err);
        }
        bcrypt.hash(user.password, _salt, null, (_err, _hash) => {
            if (_err) {
                _next(_err);
            }
            user.password = _hash;
            _next();
        });
    });
});
// Custom Method
exports.UserSchema.methods.billingAddress = function () {
    const fulladdress = `${this.fullname.trim()} ${this.geolocation.trim()}`;
    return fulladdress;
};
const User = Database_1.default.model('User', exports.UserSchema);
exports.default = User;
//# sourceMappingURL=User.js.map
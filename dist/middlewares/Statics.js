"use strict";
/**
 * Defines all the app-statics
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const express = require("express");
class Statics {
    static mountStatics(_express) {
        // Loads Options
        const options = { maxAge: 31557600000 };
        // Load Statics
        _express.use('/public', express.static(path.join(__dirname, '../../public'), options));
        // Load NPM Statics
        _express.use('/vendor', express.static(path.join(__dirname, '../../node_modules'), options));
        return _express;
    }
}
exports.default = Statics;
//# sourceMappingURL=Statics.js.map
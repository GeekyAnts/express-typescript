"use strict";
/**
 * Define Database connection
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27021/typescript_mongoose', {
    useMongoClient: true
});
exports.default = mongoose;
//# sourceMappingURL=Database.js.map
"use strict";
/**
 * Define Database connection
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Locals_1 = require("./Locals");
class Database {
    static init() {
        const dsn = Locals_1.default.config().mongooseUrl;
        const options = { useNewUrlParser: true };
        mongoose.Promise = global.Promise;
        mongoose.connect(dsn, options);
    }
}
exports.Database = Database;
exports.default = mongoose;
//# sourceMappingURL=Database.js.map
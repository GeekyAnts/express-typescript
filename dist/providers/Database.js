"use strict";
/**
 * Define Database connection
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const mongoose = require("mongoose");
const bluebird = require("bluebird");
const Locals_1 = require("./Locals");
const Log_1 = require("../middlewares/Log");
class Database {
    // Initialize your database pool
    static init() {
        const dsn = Locals_1.default.config().mongooseUrl;
        const options = { useNewUrlParser: true, useUnifiedTopology: true };
        mongoose.Promise = bluebird;
        mongoose.set('useCreateIndex', true);
        mongoose.connect(dsn, options, (error) => {
            // handle the error case
            if (error) {
                Log_1.default.info('Failed to connect to the Mongo server!!');
                console.log(error);
                throw error;
            }
            else {
                Log_1.default.info('connected to mongo server at: ' + dsn);
            }
        });
    }
}
exports.Database = Database;
exports.default = mongoose;
//# sourceMappingURL=Database.js.map
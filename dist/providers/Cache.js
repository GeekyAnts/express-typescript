"use strict";
/**
 * Define cache middleware
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const mcache = require("memory-cache");
class Cache {
    /**
     * Checks for the available cached data
     * or adds if not available
     */
    cache(_duration) {
        return (req, res, next) => {
            let key = '__express__' + req.originalUrl || req.url;
            let cachedBody = mcache.get(key);
            if (cachedBody) {
                res.send(cachedBody);
            }
            else {
                res.sendResponse = res.send;
                res.send = (body) => {
                    mcache.put(key, body, _duration * 1000);
                    res.sendResponse(body);
                };
                next();
            }
        };
    }
}
exports.default = new Cache;
//# sourceMappingURL=Cache.js.map
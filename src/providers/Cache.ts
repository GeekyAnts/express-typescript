/**
 * Define cache middleware
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import * as mcache from 'memory-cache';

class Cache {
	/**
	 * Checks for the available cached data
	 * or adds if not available
	 */
	public cache(_duration: number): any {
		return (req, res, next) => {
			let key = '__express__' + req.originalUrl || req.url;

			let cachedBody = mcache.get(key);
			if (cachedBody) {
				res.send(cachedBody);
			} else {
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

export default new Cache;

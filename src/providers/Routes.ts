/**
 * Define all your routes
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import Locals from './Locals';

import webRouter from './../routes/Web';
import apiRouter from './../routes/Api';

class Routes {
	public static mountWeb(_express): any {
		return _express.use('/', webRouter);
	}

	public static mountApi(_express): any {
		const apiPrefix = Locals.config().apiPrefix;

		return _express.use(`/${apiPrefix}`, apiRouter);
	}
}

export default Routes;

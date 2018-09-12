/**
 * Define all your routes
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import webRouter from './../routes/Web';
import apiRouter from './../routes/Api';

class Routes {
	public static mountWeb(_express): any {
		return _express.use('/', webRouter);
	}

	public static mountApi(_express): any {
		return _express.use('/api', apiRouter);
	}
}

export default Routes;

/**
 * Define all your routes
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import { Application } from 'express';
import Locals from './Locals';
import Log from '../middlewares/Log';

import webRouter from './../routes/Web';
import apiRouter from './../routes/Api';

class Routes {
	public mountWeb(_express: Application): Application {
		Log.info('Routes :: Mounting Web Routes...');

		return _express.use('/', webRouter);
	}

	public mountApi(_express: Application): Application {
		const apiPrefix = Locals.config().apiPrefix;
		Log.info('Routes :: Mounting API Routes...');

		return _express.use(`/${apiPrefix}`, apiRouter);
	}
}

export default new Routes;

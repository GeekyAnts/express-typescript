/**
 * Defines all the app-statics
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import * as path from 'path';
import * as express from 'express';

class Statics {
	public static mount(_express: express.Application): express.Application {
		// Loads Options
		const options = { maxAge: 31557600000 };

		// Load Statics
		_express.use('/public', express.static(path.join(__dirname, '../../public'), options));

		// Load NPM Statics
		_express.use('/vendor', express.static(path.join(__dirname, '../../node_modules'), options));

		return _express;
	}
}

export default Statics;

/**
 * Defines all the app-statics
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import * as path from 'path';
import * as express from 'express';

class Statics {
	public static mountStatics (_express): any {
		// Load Statics
		_express.use('/public', express.static(path.join(__dirname, '../../public'), { maxAge: 31557600000 }));

		// Load NPM Statics
		_express.use('/vendor', express.static(path.join(__dirname, '../../node_modules')));

		return _express;
	}
}

export default Statics;

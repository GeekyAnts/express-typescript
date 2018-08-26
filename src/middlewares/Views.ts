/**
 * Defines the view engines
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import * as path from 'path';

class Views {
	public static mountView (_express): any {
		_express.set('view engine', 'pug');
		_express.set('view options', { pretty: true });
		_express.set('views', path.join(__dirname, '../../views'));
		_express.locals.pretty = true;

		return _express;
	}
}

export default Views;

/**
 * Register your Express middlewares
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import Http from './Http';
import Views from './Views';
import Statics from './Statics';

class Kernel {
	public static init (_express): any {
		_express = Http.mountExpressAPIs(_express);
		_express = Views.mountView(_express);
		_express = Statics.mountStatics(_express);

		return _express;
	}
}

export default Kernel;

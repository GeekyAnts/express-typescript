/**
 * Register your Express middlewares
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import Http from './Http';
import Views from './Views';
import Statics from './Statics';
import CsrfToken from './CsrfToken';

class Kernel {
	public static init (_express): any {
		// Mount basic express apis middleware
		_express = Http.mountExpressAPIs(_express);

		// Mount csrf token verification middleware
		_express = CsrfToken.mountVerifyCsrf(_express);

		// Mount view engine middleware
		_express = Views.mountView(_express);

		// Mount statics middleware
		_express = Statics.mountStatics(_express);

		return _express;
	}
}

export default Kernel;

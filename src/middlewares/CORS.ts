/**
 * Enables the CORS
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import * as cors from 'cors';
import Locals from '../providers/Locals';

class CORS {
	public static mount(_express): any {
		const options = {
			origin: Locals.config().url,
			optionsSuccessStatus: 200		// Some legacy browsers choke on 204
		};

		_express.use(cors(options));

		return _express;
	}
}

export default CORS;

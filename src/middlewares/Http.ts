/**
 * Defines all the requisites in HTTP
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import * as cors from 'cors';
import * as compress from 'compression';
import * as bodyParser from 'body-parser';
import * as session from 'express-session';

class Http {
	public static mountExpressAPIs (_express): any {
		// Enables the request body parser
		_express.use(bodyParser.json());
		_express.use(bodyParser.urlencoded({ extended: false }));

		// Enables the session store
		_express.use(session({
			secret: process.env.APP_SECRET,
			resave: false,
			saveUninitialized: false
		}));

		// Enables the CORS
		_express.use(cors());

		// Enables the "gzip" / "deflate" compression for response
		_express.use(compress());

		return _express;
	}
}

export default Http;

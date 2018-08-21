/**
 * Register your Express middlewares
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import * as path from 'path'
import * as cors from 'cors'
import * as compress from 'compression'

class Bootstrap {
	public static init (_express): any {
		// Enables the CORS
		_express.use(cors())

		// Enables the "gzip" / "deflate" compression for response
		_express.use(compress())

		// Set the view folder path & view engine
		_express.set('views', path.join(__dirname, '/../../views'))
		_express.set('view engine', 'ejs')

		return _express
	}
}

export default Bootstrap

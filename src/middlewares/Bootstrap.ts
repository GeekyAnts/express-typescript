/**
 * Register your Express middlewares
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import * as cors from 'cors'
import * as path from 'path'
import * as express from 'express'
import * as compress from 'compression'

class Bootstrap {
	public static mountExpressAPIs (_express): any {
		// Enables the CORS
		_express.use(cors())

		// Enables the "gzip" / "deflate" compression for response
		_express.use(compress())

		return _express
	}

	public static mountView(_express): any {
		_express.set('view engine', 'pug')
		_express.set('view options', {pretty: true})
		_express.set('views', path.join(__dirname, '../../views'))
		_express.locals.pretty = true
		
		return _express
	}

	public static mountStatics (_express): any {
		// Load Statics
		_express.use('/public', express.static(path.join(__dirname, '../../public'), { maxAge: 31557600000 }))

		// Load NPM Statics
		_express.use('/vendor', express.static(path.join(__dirname, '../../node_modules')))

		return _express
	}

	public static init (_express): any {
		_express = this.mountExpressAPIs(_express)
		_express = this.mountView(_express)
		_express = this.mountStatics(_express)

		return _express
	}
}

export default Bootstrap

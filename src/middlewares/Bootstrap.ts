/**
 * Register your Express middlewares
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import 'marko/node-require'
import * as express from 'express'
import * as path from 'path'
import * as lasso from 'lasso'
import * as cors from 'cors'
import * as compress from 'compression'
import * as markoExpress from 'marko/express'
import * as lassoMiddleware from 'lasso/middleware'

import Lasso from '../config/Lasso'

class Bootstrap {
	public static mountExpressAPIs (_express): any {
		// Enables the CORS
		_express.use(cors())

		// Enables the "gzip" / "deflate" compression for response
		_express.use(compress())

		return _express
	}

	public static mountMarko (_express): any {
		// Configure lasso to control how JS/CSS/etc. is delivered to the browser
		lasso.configure(Lasso.init())

		// Register Lasso Static Middleware
		_express.use(lassoMiddleware.serveStatic())

		// Set the view folder path & view engine
		_express.use(markoExpress())

		return _express
	}

	public static mountStatics (_express): any {
		// Load Statics
		_express.use('/public', express.static(path.join(__dirname, '../../public'), { maxAge: 31557600000 }))

		// Load NPM Statics
		_express.use('/node_modules', express.static(path.join(__dirname, '../../node_modules')))

		return _express
	}

	public static init (_express): any {
		_express = this.mountExpressAPIs(_express)
		_express = this.mountMarko(_express)
		_express = this.mountStatics(_express)

		return _express
	}
}

export default Bootstrap

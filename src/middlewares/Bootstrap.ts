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

class Bootstrap {
	public static init (_express): any {
		// Enables the CORS
		_express.use(cors())

		// Enables the "gzip" / "deflate" compression for response
		_express.use(compress())

		// markoNode.install()

		// Configure lasso to control how JS/CSS/etc. is delivered to the browser
		lasso.configure({
			plugins: [
				'lasso-marko' // Allow Marko templates to be compiled and transported to the browser
			],
			outputDir: path.join(__dirname, '../../public/static'), // Place all generated JS/CSS/etc. files into the "static" dir
			urlPrefix: "/public/static",
			bundlingEnabled: true, // Only enable bundling in production
			minify: true, // Only minify JS and CSS code in production
			fingerprintsEnabled: true, // Only add fingerprints to URLs in production
		})

		_express.use(require('lasso/middleware').serveStatic());

		// Set the view folder path & view engine
		_express.use(markoExpress())

		// Load Statics
		_express.use('/public', express.static(path.join(__dirname, '../../public'), { maxAge: 31557600000 }));

		return _express
	}
}

export default Bootstrap

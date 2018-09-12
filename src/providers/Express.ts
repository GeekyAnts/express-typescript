/**
 * Primary file for your Clustered API Server
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import * as express from 'express';

import Locals from './Locals';
import Routes from './Routes';
import Bootstrap from '../middlewares/Kernel';
import ExceptionHandler from '../exception/Handler';

class Express {
	/**
	 * Create the express object
	 */
	public express;

	/**
	 * Initializes the express server
	 */
	constructor () {
		this.express = express();

		this.mountDotEnv();
		this.mountMiddlewares();
		this.mountRoutes();
	}

	private mountDotEnv (): void {
		this.express = Locals.init(this.express);
	}

	/**
	 * Mounts all the defined middlewares
	 */
	private mountMiddlewares (): void {
		this.express = Bootstrap.init(this.express);
	}

	/**
	 * Mounts all the defined routes
	 */
	private mountRoutes (): void {
		this.express = Routes.mountWeb(this.express);
		this.express = Routes.mountApi(this.express);
	}

	/**
	 * Starts the express server
	 */
	public init (): any {
		// Registering Exception / Error Handlers
		this.express.use(ExceptionHandler.logErrors);
		this.express.use(ExceptionHandler.clientErrorHandler);
		this.express.use(ExceptionHandler.errorHandler);
		this.express = ExceptionHandler.notFoundHandler(this.express);

		// Start the server on the specified port
		this.express.listen(process.env.PORT, _error => {
			if (_error) {
				return console.log('Error: ', _error);
			}

			return console.log('\x1b[36m%s\x1b[0m', `Server is running on port '${process.env.PORT}'`);
		});
	}
}

/** Export the express module */
export default new Express();

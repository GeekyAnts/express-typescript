/**
 * Define Database connection
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import * as mongoose from 'mongoose';
import * as bluebird from 'bluebird';
import { MongoError } from 'mongodb';

import Locals from './Locals';
import Log from '../middlewares/Log';

export class Database {
	// Initialize your database pool
	public static init (): any {
		const dsn = Locals.config().mongooseUrl;
		const options = { useNewUrlParser: true, useUnifiedTopology: true };

		(<any>mongoose).Promise = bluebird;

		mongoose.set('useCreateIndex', true);

		mongoose.connect(dsn, options, (error: MongoError) => {
			// handle the error case
			if (error) {
				Log.info('Failed to connect to the Mongo server!!');
				console.log(error);
				throw error;
			} else {
				Log.info('connected to mongo server at: ' + dsn);
			}
		});
	}
}

export default mongoose;

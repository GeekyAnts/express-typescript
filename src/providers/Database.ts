/**
 * Define Database connection
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import * as mongoose from 'mongoose';
import Locals from './Locals';

export class Database {
	// Initialize your database pool
	public static init (): any {
		const dsn = Locals.config().mongooseUrl;
		const options = { useNewUrlParser: true };

		(mongoose as any).Promise = global.Promise;

		mongoose.connect(dsn, options);
	}
}

export default mongoose;

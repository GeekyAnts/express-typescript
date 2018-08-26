/**
 * Define Database connection
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import * as mongoose from 'mongoose';

(mongoose as any).Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27021/typescript_mongoose', {
	useMongoClient: true
});

export default mongoose;

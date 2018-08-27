/**
 * Define App Locals & Configs
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import * as path from 'path';
import * as dotenv from 'dotenv';

class Locals {
	public static config(): any {
		dotenv.config({ path: path.join(__dirname, '../../.env') });

		const name = process.env.APP_NAME || 'NodeTS Dashboard';
		const url = process.env.APP_URL || `http://localhost:${process.env.PORT}`;
		const year = (new Date()).getFullYear();
		const copyright = `Copyright ${year} ${name} | All Rights Reserved`;
		const company = process.env.COMPANY_NAME || 'GeekyAnts';
		const description = process.env.APP_DESCRIPTION || 'Here goes the app description';
		const appSecret = process.env.APP_SECRET || 'This is your responsibility!';
		const mongooseUrl = process.env.MONGOOSE_URL;

		return {
			name,
			company,
			url,
			copyright,
			description,
			appSecret,
			mongooseUrl
		};
	}

	public static init (_express): any {
		_express.locals.app = this.config();
		return _express;
	}
}

export default Locals;

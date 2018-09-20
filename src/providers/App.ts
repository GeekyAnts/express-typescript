/**
 * Primary file for your Clustered API Server
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import * as path from 'path';
import * as dotenv from 'dotenv';

import Express from './Express';
import { Database } from './Database';
import Jobs from '../jobs';

import Log from '../middlewares/Log';

class App {
	// Clear the console
	public clearConsole (): void {
		process.stdout.write('\x1B[2J\x1B[0f');
	}

	// Loads your dotenv file
	public loadConfiguration (): void {
		Log.info('Configuration :: Booting @ Master...');

		dotenv.config({ path: path.join(__dirname, '../../.env') });
	}

	// Loads your Server
	public loadServer (): void {
		Log.info('Server :: Booting @ Master...');

		Express.init();
	}

	// Loads the Database Pool
	public loadDatabase (): void {
		Log.info('Database :: Booting @ Master...');

		Database.init();
	}

	// Loads the Worker Cluster
	public loadWorker (): void {
		Log.info('Worker :: Booting @ Master...');

		setInterval(() => Jobs.init(), 1000);
	}
}

export default new App;

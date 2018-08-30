/**
 * Primary file for your Clustered API Server
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import * as os from 'os';
import * as dotenv from 'dotenv';
import * as cluster from 'cluster';
import * as path from 'path';

import express from './Express';
import { Database } from './Database';

class App {
	// Loads your dotenv file
	public static loadConfiguration (): void {
		dotenv.config({ path: path.join(__dirname, '../../.env') });
	}

	// Cluster's your server
	public static loadServer (): void {
		if (cluster.isMaster) {
			for (let i = 0; i < os.cpus().length; i += 1) {
				cluster.fork();
			}
		} else {
			express.init();
		}
	}

	// Loads the Database Pool
	public static loadDatabase (): void {
		Database.init();
	}
}

export default App;

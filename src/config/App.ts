/**
 * Primary file for your Clustered API Server
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import * as os from 'os'
import * as dotenv from 'dotenv'
import * as cluster from 'cluster'

import express from './Express'

class App {
	public static loadConfiguration (): void {
		dotenv.config()
	}

	public static loadServer (): void {
		if (cluster.isMaster) {
			for (let i = 0; i < os.cpus().length; i += 1) {
				cluster.fork()
			}
		} else {
			express.init()
		}
	}
}

export default App

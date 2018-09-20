/**
 * Bootstrap your App
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import * as os from 'os';
import * as cluster from 'cluster';

import App from './providers/App';
import Log from './middlewares/Log';

if (cluster.isMaster) {
	/**
	 * Clear the console before the app runs
	 */
	App.clearConsole();

	/**
	 * Load Configuration
	 */
	App.loadConfiguration();

	/**
	 * Run the Database pool
	 */
	App.loadDatabase();

	/**
	 * Run the Worker every minute
	 * Note: we normally start worker after
	 * the entire app is loaded
	 */
	setTimeout(() => App.loadWorker(), 1000 * 60);

	/**
	 * Find the number of available CPUS
	 */
	const CPUS: any = os.cpus();

	/**
	 * Fork the process, the number of times we have CPUs available
	 */
	CPUS.forEach(() => cluster.fork());

	cluster.on('listening', (worker) => Log.info(`Server :: Cluster with ProcessID '${worker.process.pid}' Connected`));
	cluster.on('disconnect', (worker) => Log.info(`Server :: Cluster with ProcessID '${worker.process.pid}' Disconnected`));
	cluster.on('exit', (worker) => {
		Log.info(`Server :: Cluster with ProcessID '${worker.process.pid}' is Dead`);
		// Ensuring a new cluster will start if an old one dies
		cluster.fork();
	});

} else {

	/**
	 * Run the Server on Clusters
	 */
	App.loadServer();
}

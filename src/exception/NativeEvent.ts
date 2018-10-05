/**
 * Catch all your node env's native event
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import Log from '../middlewares/Log';

class NativeEvent {
	public cluster (_cluster): void {
		// Catch cluster listening event...
		_cluster.on('listening', (worker) =>
			Log.info(`Server :: Cluster with ProcessID '${worker.process.pid}' Connected!`)
		);

		// Catch cluster once it is back online event...
		_cluster.on('online', (worker) =>
			Log.info(`Server :: Cluster with ProcessID '${worker.process.pid}' has responded after it was forked! `)
		);

		// Catch cluster disconnect event...
		_cluster.on('disconnect', (worker) =>
			Log.info(`Server :: Cluster with ProcessID '${worker.process.pid}' Disconnected!`)
		);

		// Catch cluster exit event...
		_cluster.on('exit', (worker, code, signal) => {
			Log.info(`Server :: Cluster with ProcessID '${worker.process.pid}' is Dead with Code '${code}, and signal: '${signal}'`);
			// Ensuring a new cluster will start if an old one dies
			_cluster.fork();
		});
	}

	public process (): void {
		// Catch the Process's uncaught-exception
		process.on('uncaughtException', (exception) =>
			Log.error(exception.stack)
		);

		// Catch the Process's warning event
		process.on('warning', (warning) =>
			Log.warn(warning.stack)
		);
	}
}

export default new NativeEvent;

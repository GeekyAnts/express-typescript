/**
 * Define the error & exception handlers
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

class Handler {
	public static clientErrorHandler(err, req, res, next): void {
		if (req.xhr) {
			res.status(500).send({error: 'Something went wrong!'});
		} else {
			next(err);
		}
	}

	public static errorHandler(err, req, res, next): void {
		res.status(500);
		res.render('pages/error', { errors: err.stack, title: 'Under Maintenance' });
	}

	public static logErrors(err, req, res, next): void {
		next(err);
	}
}

export default Handler;

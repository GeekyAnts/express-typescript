/**
 * Handle all your social auth routesß
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

class Social {
	public static googleCallback(req, res): any {
		return res.redirect('/account');
	}
}

export default Social;

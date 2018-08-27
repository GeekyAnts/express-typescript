/**
 * Handles the logout request
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

class Logout {
	public static perform (req, res): any {
		req.logout();
		req.session.destroy((err) => {
			if (err) {
				console.log('Error : Failed to destroy the session during logout.', err);
			}

			req.user = null;
			res.redirect('/');
		});
	}
}

export default Logout;

/**
 * Handles the logout request
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import { IRequest, IResponse } from '../../interfaces/vendors';

class Logout {
	public static perform (req: IRequest, res: IResponse): any {
		req.logout();
		req.session.destroy((err) => {
			if (err) {
				console.log('Error : Failed to destroy the session during logout.', err);
			}

			req.user = null;
			return res.redirect('/');
		});
	}
}

export default Logout;

/**
 * Handler for Account
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import { IRequest, IResponse } from '../interfaces/vendors';

class Account {
	public static index (req: IRequest, res: IResponse): void {
		return res.render('pages/dashboard', {
			title: 'Home'
		});
	}
}

export default Account;

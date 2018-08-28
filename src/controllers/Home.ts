/**
 * Handler for Home
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import { IRequest, IResponse } from '../interfaces/vendors';

class Home {
	public static index (req: IRequest, res: IResponse): void {
		res.render('pages/home', {
			title: 'Home'
		});
	}
}

export default Home;

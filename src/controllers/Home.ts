/**
 *	Handler for Home
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
const template = require('../../views/home')

class Home {
	public static index (req, res): void {
		res.marko(template, {
			locals: res.app.locals.app,
			title: 'Home'
		})
	}
}

export default Home

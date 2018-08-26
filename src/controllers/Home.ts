/**
 * Handler for Home
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

class Home {
	public static index (req, res): void {
		res.render('pages/home', {
			title: 'Home'
		});
	}
}

export default Home;

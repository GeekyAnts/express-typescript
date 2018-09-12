/**
 * Define all your API web-routes
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import { Router } from 'express';

const router = Router();

router.get('/', (req, res, next) => {
	res.json({faiz: 'ahmed'});
});

export default router;

const express = require('express');
const router = express.Router();
const api = require('../common/api');

// GET api configuration
router.get('/', async (_req, res) => {
	try {
		const setup = await api.getConfiguration();
		res.json(setup);
	} catch (error) {
		res.json({
			error
		});
	}
});

module.exports = router;

const express = require('express');
const router = express.Router();
const api = require('../common/api');

// GET api configuration
router.get('/configuration', async (_req, res) => {
	try {
		const setup = await api.getConfiguration();
		res.json(setup);
	} catch (error) {
		res.json({
			error
		});
	}
});

// List all Upcoming Movies
router.get('/upcoming/:page?', async (req, res) => {
	try {
		const list = await api.getUpcoming(req.params.page);
		res.json(list);
	} catch (error) {
		console.log(error)
		res.json({
			error
		});
	}
});

// Search Movie
router.post('/search', async (req, res) => {
	const search = req.body.search;
	res.json({
		search,
		'error': 'NOT AVAILABLE YET'
	});
});

// Get movie
router.get('/:id', async (req, res) => {
	res.json({
		'id': req.params.id,
		'error': 'NOT AVAILABLE YET'
	});
});

module.exports = router;

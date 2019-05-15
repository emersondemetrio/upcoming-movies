const express = require('express');
const router = express.Router();
const api = require('./api');

// List all Upcoming Movies
router.get('/upcoming', async (_req, res) => {
	try {
		const list = await api.upcoming();
		res.json(list);
	} catch (error) {
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

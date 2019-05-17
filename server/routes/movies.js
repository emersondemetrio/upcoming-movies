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
		res.json({
			error
		});
	}
});

// Search Movies
router.get('/search/:movie/:page?', async (req, res) => {
	try {
		const movie = await api.searchMovies(req.params.movie, req.params.page);
		res.json(movie);
	} catch (error) {
		console.group(error)
		res.json({
			error
		});
	}
});

// Get movie
router.get('/get/:id', async (req, res) => {
	try {
		const movie = await api.getMovie(req.params.id);
		res.json(movie);
	} catch (error) {
		console.group(error)
		res.json({
			error
		});
	}
});

module.exports = router;

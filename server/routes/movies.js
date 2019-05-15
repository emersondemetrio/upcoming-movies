const express = require('express');
const router = express.Router();
const moment = require('moment');

const credentials = {
	tmdbApiKey: process.env.tmdbApiKey
};

// List all Movies
router.get('/list', async (_req, res) => {
	const list = [{
		name: 'Spider Man 3'
	}]//await api.list();
	res.json(list);
});

// Find Movies that are not deleted
router.get('/find', async (_req, res) => {
	const result = await api.find();
	res.json(result.docs);
});

// Create Purchase
router.post('/search', async (req, res) => {
	const search = req.body.search;

	res.json({
		purchase,
		timeUntilZero
	});
});

// Get movie
router.get('/:id', async (req, res) => {
	const response = await api.get(req.params.id);
	res.json(response);
});

module.exports = router;

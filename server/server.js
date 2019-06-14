const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const process = require('process');
const path = require('path');

const port = process.env.PORT || 3000;

app.use(cors());

const moviesRouter = require('./routes/movies');
const configurationRouter = require('./routes/configuration');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use('/api/movies', moviesRouter);
app.use('/api/configuration', configurationRouter);

const allowedExt = [
	'.js',
	'.ico',
	'.css',
	'.png',
	'.jpg',
	'.woff2',
	'.woff',
	'.ttf',
	'.svg',
];

app.get('*', (req, res) => {
	if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
		res.sendFile(path.resolve(`dist/upcoming-movies/${req.url}`));
	} else {
		res.sendFile(path.resolve('dist/upcoming-movies/index.html'));
	}
});

app.listen(port, async () => {
	console.log('Server running on port 3000');
});

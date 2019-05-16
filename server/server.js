const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const process = require('process');

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

app.listen(port, async () => {
	console.log('Server running on port 3000');
});

const unirest = require("unirest");

const setup = {
	apiUrl: 'https://api.themoviedb.org/3',
	apiKey: process.env.tmdbApiKey
};

const getRequest = (method, endPoint, reqOnly = false) => {
	endPoint = `${setup.apiUrl}/${endPoint}`;
	const req = unirest(method, endPoint);

	if(reqOnly) {
		return req;
	}

	req.query({
		'language': 'en-US',
		'api_key': setup.apiKey
	});

	return req.send('{}');
};

const getConfiguration = () => new Promise((resolve, reject) => {
	const req = getRequest('GET', 'configuration');

	req.end(res => {
		if (res.error) {
			reject(res.error);
		}

		resolve(res.body);
	});
});

const getUpcoming = (page = 1) => new Promise((resolve, reject) => {
	const req = getRequest('GET', 'movie/upcoming', true);

	req.query({
		'page': page,
		'language': 'en-US',
		'api_key': setup.apiKey
	});

	req.send('{}');
	req.end(res => {
		if (res.error) {
			reject(res.error);
		}

		resolve(res.body);
	});
});

const getMovie = (id) => new Promise((resolve, reject) => {
	const req = getRequest('GET', `movie/${id}`);

	req.end(res => {
		if (res.error) {
			reject(res.error);
		}

		resolve(res.body);
	});
});

const searchMovies = (encodedSearchString, page = 1) => new Promise((resolve, reject) => {
	const req = getRequest('GET', `search/movie`, true);

	req.query({
		'page': page,
		'query': encodedSearchString,
		'language': 'en-US',
		'include_adult': false,
		'api_key': setup.apiKey
	});

	req.send('{}');
	req.end(res => {
		console.log(res)
		if (res.error) {
			reject(res.error);
		}

		resolve(res.body);
	});
});


module.exports = {
	getConfiguration,
	getUpcoming,
	getMovie,
	searchMovies
};

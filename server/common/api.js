const unirest = require("unirest");

const setup = {
	apiUrl: 'https://api.themoviedb.org/3',
	apiKey: process.env.tmdbApiKey
};

const getRequest = (method, endPoint) => {
	endPoint = `${setup.apiUrl}/${endPoint}`
	const req = unirest(method, endPoint)

	req.query({
		'page': '1',
		'language': 'en-US',
		'api_key': setup.apiKey
	});

	return req;
};

const getConfiguration = () => new Promise((resolve, reject) => {
	const req = getRequest('GET', 'configuration').send('{}');
console.log(req)
	req.end(res => {
		console.log(res)
		if (res.error) {
			reject(res.error);
		}

		resolve(res.body);
	});
});

const getUpcoming = () => new Promise((resolve, reject) => {
	const req = getRequest('GET', 'movie/upcoming').send('{}');

	req.end(function (res) {
		if (res.error) {
			reject(res.error);
		}

		resolve(res.body.results);
	});
});

module.exports = {
	getConfiguration,
	getUpcoming
};

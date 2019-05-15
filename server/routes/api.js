const unirest = require("unirest");

const setup = {
	tmdbUrl: 'https://api.themoviedb.org/3',
	tmdbApiKey: process.env.tmdbApiKey
};

const upcoming = () => new Promise((resolve, reject) => {
	const req = unirest("GET", "https://api.themoviedb.org/3/movie/upcoming");
	req.query({
		"page": "1",
		"language": "en-US",
		"api_key": setup.tmdbApiKey
	});

	req.send("{}");

	req.end(function (res) {
		if (res.error) {
			reject(res.error);
		}

		resolve(res.body);
	});
});

exports.upcoming = upcoming;

const process = require('process');
const moment = require('moment');
const axios = require('axios');

const credentials = {
	tmdbApiKey: process.env.tmdbApiKey
};

let diaper = null;

const genericErrorHander = (error) => ({
	message: 'An error has occurred',
	error
});

exports.find = async () => {
	const query = {
		selector: {
			'deleted': {
				'$eq': false
			}
		}
	};

	try {
		return await diaper.find(query);
	} catch (error) {
		return genericErrorHander(error);
	}
}

exports.list = async () => {
	try {
		return await diaper.list({
			include_docs: true
		});
	} catch (error) {
		return genericErrorHander(error);
	}
};

exports.get = async (id) => {
	try {
		return await diaper.get(id);
	} catch (error) {
		return genericErrorHander(error);
	}
};

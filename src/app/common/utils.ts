import { environment } from 'src/environments/environment.prod';

export class Utils {
	public static getApiSetup() {
		const key = `${environment.localStorageKey}-setup`;
		try {
			return JSON.parse(localStorage.getItem(key));
		} catch (error) {
			return {
				error: true
			};
		}
	}

	public static storeApiSetup(setup: ApiConfiguration) {
		const key = `${environment.localStorageKey}-setup`;
		localStorage.setItem(key, JSON.stringify(setup));
	}

	public static mapImages(movies: Movie[]): Movie[] {
		const setup = Utils.getApiSetup();
		return movies.map(movie => Utils.mapImage(movie, setup));
	}

	public static mapImage(movie: Movie, setup: ApiConfiguration = null): Movie {
		setup = setup === null ? Utils.getApiSetup() : setup;

		if(!setup.error && setup !== null) {
			const posterSize = setup.images.poster_sizes
				.find(imageSize => imageSize === 'w500') ? 'w500' : 'original';

			const image = movie.poster_path !== null ? movie.poster_path : null;

			return {
				cover: image !== null ? (
					`${setup.images.secure_base_url}${posterSize}${movie.poster_path}`
				): 'assets/no-image.png',
				...movie
			};
		} else {
			return {
				cover: 'assets/no-image.png',
				...movie
			};
		}
	}
}

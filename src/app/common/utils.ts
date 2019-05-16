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
		if(!setup.error) {
			const posterSize = setup.images.poster_sizes
				.find(s => s === 'w500') ? 'w500' : 'original';
			return movies.map(movie => ({
				cover: `${setup.images.secure_base_url}${posterSize}${movie.poster_path}`,
				...movie
			}));
		} else {
			return movies.map(movie => ({
				cover: `assets/no-image.png`,
				...movie
			}));
		}
	}
}

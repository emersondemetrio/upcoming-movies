import { environment } from 'src/environments/environment.prod';

export class Utils {
	public static getApiSetup() {
		const key = `${environment.localStorageKey}-setup`;
		try {
			return JSON.parse(localStorage.getItem(key));
		} catch (error) {
			return {};
		}
	}

	public static storeApiSetup(setup: ApiConfiguration) {
		const key = `${environment.localStorageKey}-setup`;
		localStorage.setItem(key, JSON.stringify(setup));
	}
}

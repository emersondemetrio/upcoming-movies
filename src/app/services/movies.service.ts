import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class MoviesService {

	private apiUrl: string;

	constructor(
		private http: HttpClient) {
		this.apiUrl = environment.apiUrl;
	}

	public list(): Observable<Movie[]> {
		return this.http.get<Movie[]>(`${this.apiUrl}movies/upcoming`);
	}

	public get(movieId: string): Observable<Movie> {
		return this.http.get<Movie>(`${this.apiUrl}movies/get/${movieId}`);
	}

	public search(movieName: string): Observable<Movie[]> {
		return this.http.post<Movie[]>(`${this.apiUrl}movies/search`, {
			movieName
		});
	}
}

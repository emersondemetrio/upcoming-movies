import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class ConfigurationService {

	private apiUrl: string;

	constructor(
		private http: HttpClient) {
		this.apiUrl = environment.apiUrl;
	}

	public getSetup(): Observable<ApiConfiguration> {
		return this.http.get<ApiConfiguration>(`${this.apiUrl}configuration`);
	}
}

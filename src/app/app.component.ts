import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from './services/configuration.service';
import { Utils } from './utils';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
	constructor(
		private configurationService: ConfigurationService) {
	}

	ngOnInit(): void {
		this.loadSetup();
	}

	private loadSetup() {
		this
			.configurationService
			.getSetup()
			.subscribe(resp => {
				Utils.storeApiSetup(resp);
			});

	}
}

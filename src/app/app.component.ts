import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from './services/configuration.service';
import { Utils } from './common/utils';
import { MatSnackBar } from '@angular/material';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
	public isLoading = false;
	public feedbackMessage = '';

	constructor(
		private configurationService: ConfigurationService,
		private snackBar: MatSnackBar) {
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
			}, () => {
				this.notify('An error has occurred. Please, try again later', 0);
				this.isLoading = true;
			});

	}

	private notify(message: string, duration = 3000) {
		this.snackBar.open(message, '', {
			verticalPosition: 'top',
			duration
		});
		this.feedbackMessage = message;
	}
}

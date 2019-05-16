import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Utils } from 'src/app/common/utils';

@Component({
	selector: 'app-movies-list',
	templateUrl: './movies-list.component.html',
	styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

	public isLoading = false;
	public feedbackMessage = '';
	public pageInfo: PagedResponse = null;

	constructor(
		private movieService: MoviesService,
		private router: Router,
		private snackBar: MatSnackBar) {
	}

	public getmovies() {
		this.isLoading = true;
		this
			.movieService
			.list()
			.subscribe(resp => {
				this.pageInfo = {
					...resp,
					results: Utils.mapImages(resp.results),
				};

				this.isLoading = false;
			}, () => {
				this.notify('An error has occurred. Please, try again later', 0);
				this.isLoading = true;
			});
	}

	ngOnInit() {
		this.getmovies();
	}

	public navigate(params: string[]) {
		this.router.navigate(params);
	}

	private notify(message: string, duration = 3000) {
		this.snackBar.open(message, '', {
			verticalPosition: 'top',
			duration
		});
		this.feedbackMessage = message;
	}
}

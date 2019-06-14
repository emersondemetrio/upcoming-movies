import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { MoviesService } from 'src/app/services/movies.service';
import { Utils } from 'src/app/common/utils';

@Component({
	selector: 'app-movies-view',
	templateUrl: './movies-view.component.html',
	styleUrls: ['./movies-view.component.css']
})
export class MoviesViewComponent implements OnInit {

	public movie: Movie = {};

	public movieId: string = null;
	public isLoading = false;
	public hasError = false;
	public feedbackMessage = '';

	constructor(
		private moviesService: MoviesService,
		private activeRoute: ActivatedRoute,
		public router: Router,
		private snackBar: MatSnackBar) {
		this.movieId = this.activeRoute.snapshot.paramMap.get('movieId');
	}

	ngOnInit() {
		if (this.movieId !== null) {
			this.isLoading = true;
			this
				.moviesService
				.get(this.movieId)
				.subscribe(resp => {
					if (resp.error) {
						this.defaultError();
					} else {
						this.movie = Utils.mapImage(resp);
						this.isLoading = false;
					}
				}, () => this.defaultError());
		}
	}

	public defaultError(): void {
		this.notify('An error has occurred. Please, try again later', 0);
		this.isLoading = true;
		this.hasError = true;
	}

	public goBack(): void {
		this.router.navigate(['/']);
	}

	private notify(message: string, duration = 3000): void {
		this.snackBar.open(message, '', {
			verticalPosition: 'top',
			duration
		});

		this.feedbackMessage = message;
	}
}

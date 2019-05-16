import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
	selector: 'app-movies-view',
	templateUrl: './movies-view.component.html',
	styleUrls: ['./movies-view.component.css']
})
export class MoviesViewComponent implements OnInit {

	public movie: Movie = {};

	public movieId: string = null;
	public isLoading = false;
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
				.subscribe(movie => {
					this.movie = movie;
					this.isLoading = false;
				}, () => {
					this.notify('An error has occurred. Please, try again later', 0);
					this.isLoading = true;
				});
		}
	}

	public goBack() {
		this.router.navigate(['/']);
	}

	private notify(message: string, duration = 3000) {
		this.snackBar.open(message, '', {
			verticalPosition: 'top',
			duration
		});

		this.feedbackMessage = message;
	}
}

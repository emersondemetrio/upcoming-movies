import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
	selector: 'app-movies-list',
	templateUrl: './movies-list.component.html',
	styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

	public isLoading = false;
	public feedbackMessage = '';

	constructor(
		private movieService: MoviesService,
		private router: Router,
		private snackBar: MatSnackBar) {
	}

	movies: Movie[] = [];

	public getmovies() {
		this
			.movieService
			.list()
			.subscribe(resp => {
				this.movies = resp;
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

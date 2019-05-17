import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { MatSnackBar, PageEvent } from '@angular/material';
import { Router } from '@angular/router';
import { Utils } from 'src/app/common/utils';

@Component({
	selector: 'app-movies-list',
	templateUrl: './movies-list.component.html',
	styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
	public hasError = false;
	public isLoading = true;
	public feedbackMessage = '';

	public pageInfo: PagedResponse = null;
	public length = null;
	public pageSize = null;


	public search: string = '';
	public searchHasResults = false;
	public resultsFor: string = '';

	constructor(
		private movieService: MoviesService,
		private router: Router,
		private snackBar: MatSnackBar) {
	}

	ngOnInit() {
		this.getMovies();
	}

	public defaultError(): void {
		this.notify('An error has occurred. Please, try again later', 0);
		this.isLoading = true;
		this.hasError = true;
	}

	public pageChanged(event: PageEvent): void {
		this.getMovies(event.pageIndex + 1);
	}

	public resetSearch(): void {
		this.search = '';
		this.searchHasResults = false;
		this.getMovies();
	}

	public searchMovies(): void {
		this.isLoading = true;
		this
			.movieService
			.search(this.search)
			.subscribe(resp => {
				if (resp.error) {
					this.defaultError();
				} else {
					this.pageInfo = {
						...resp,
						results: Utils.mapImages(resp.results),
					};

					this.searchHasResults = true;
					this.resultsFor = this.search;
					this.length = resp.total_results;
					this.pageSize = resp.results.length;

					this.isLoading = false;
				}
			}, () => this.defaultError());
	}

	public getMovies(page: number = 1): void {
		this.isLoading = true;
		this
			.movieService
			.list(page)
			.subscribe(resp => {
				if (resp.error) {
					this.defaultError();
				} else {
					this.pageInfo = {
						...resp,
						results: Utils.mapImages(resp.results),
					};

					this.length = resp.total_results;
					this.pageSize = resp.results.length;
					this.isLoading = false;
				}
			}, () => this.defaultError());
	}

	public navigate(params: string[]): void {
		this.router.navigate(params);
	}

	private notify(message: string, duration = 3000): void {
		this.snackBar.open(message, '', {
			verticalPosition: 'top',
			duration
		});

		this.feedbackMessage = message;
	}
}

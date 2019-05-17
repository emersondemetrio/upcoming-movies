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

	public isLoading = true;
	public feedbackMessage = '';
	public pageInfo: PagedResponse = null;
	public length = null;
	public pageSize = null;
	public hasError = false;
	public search: string = '';
	public searchHasResults = false;
	public resultsFor: string = '';

	constructor(
		private movieService: MoviesService,
		private router: Router,
		private snackBar: MatSnackBar) {
	}

	ngOnInit() {
		this.getMovies(1, true);
	}

	public pageChanged(event: PageEvent) {
		this.getMovies(event.pageIndex + 1);
	}

	public resetSearch() {
		this.search = '';
		this.searchHasResults = false;
		this.getMovies(1);
	}

	public searchMovies() {
		this.isLoading = true;
		this
			.movieService
			.search(this.search)
			.subscribe(resp => {
				this.pageInfo = {
					...resp,
					results: Utils.mapImages(resp.results),
				};
				this.searchHasResults = true;
				this.resultsFor = this.search;
				this.length = resp.total_results;
				this.pageSize = resp.results.length;

				this.isLoading = false;
			}, () => {
				this.notify('An error has occurred. Please, try again later', 0);
				this.isLoading = true;
				this.hasError = true;
			});
	}

	public getMovies(page: number, isFirst: boolean = false) {
		this.isLoading = true;
		this
			.movieService
			.list(page)
			.subscribe(resp => {
				this.pageInfo = {
					...resp,
					results: Utils.mapImages(resp.results),
				};

				if (isFirst) {
					this.length = resp.total_results;
					this.pageSize = resp.results.length;
				}

				this.isLoading = false;
			}, () => {
				this.notify('An error has occurred. Please, try again later', 0);
				this.isLoading = true;
				this.hasError = true;
			});
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

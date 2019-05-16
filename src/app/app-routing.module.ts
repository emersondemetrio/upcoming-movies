import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MoviesViewComponent } from './movies/movies-view/movies-view.component';

const routes: Routes = [{
	path: '',
	redirectTo: '/movies',
	pathMatch: 'full'
}, {
	path: 'movies',
	component: MoviesListComponent,
}, {
	path: 'movies/:movieId',
	component: MoviesViewComponent,
}];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: []
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';

const routes: Routes = [{
	path: '',
	redirectTo: '/movies',
	pathMatch: 'full'
}, {
	path: 'movies',
	component: MoviesListComponent,
}];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: []
})
export class AppRoutingModule { }

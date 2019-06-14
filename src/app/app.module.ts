import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';

import {
	MatToolbarModule,
	MatIconModule,
	MatButtonModule,
	MatCardModule,
	MatFormFieldModule,
	MatInputModule,
	MatSnackBarModule,
} from '@angular/material';


import { HttpClientModule } from '@angular/common/http';

import { MoviesService } from './services/movies.service';
import { ConfigurationService } from './services/configuration.service';

import { MoviesListModule } from './movies/movies-list/movies-list.module';
import { MoviesViewModule } from './movies/movies-view/movies-view.module';

import { PipesModule } from './common/pipes/pipes.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		FlexLayoutModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatSnackBarModule,
		MoviesListModule,
		MoviesViewModule,
		HttpClientModule,
		PipesModule
	],
	providers: [
		ConfigurationService,
		MoviesService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

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
	MatMenuModule,
	MatCardModule,
	MatSidenavModule,
	MatFormFieldModule,
	MatInputModule,
	MatSelectModule,
	MatChipsModule,
	MatSnackBarModule,
	MatTabsModule,
} from '@angular/material';

import { MoviesService } from './services/movies.service';
import { HttpClientModule } from '@angular/common/http';
import { MoviesListModule } from './movies/movies-list/movies-list.module';

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
		MatMenuModule,
		MatCardModule,
		MatSidenavModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		MatChipsModule,
		MatSnackBarModule,
		MatTabsModule,
		MoviesListModule,
		HttpClientModule
	],
	providers: [
		MoviesService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

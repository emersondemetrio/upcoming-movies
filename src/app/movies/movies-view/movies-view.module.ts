import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesViewComponent } from './movies-view.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import {
	MatButtonModule,
	MatIconModule,
	MatDialogModule,
	MatSnackBarModule,
	MatProgressBarModule
} from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		CommonModule,
		MatButtonModule,
		MatIconModule,
		MatDialogModule,
		FlexLayoutModule,
		RouterModule,
		MatSnackBarModule,
		MatProgressBarModule
	],
	exports: [
		MoviesViewComponent
	],
	declarations: [
		MoviesViewComponent
	]
})
export class MoviesViewModule { }

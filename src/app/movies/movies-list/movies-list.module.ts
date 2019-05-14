import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
	MatCardModule,
	MatButtonModule,
	MatIconModule,
	MatDialogModule,
	MatCheckboxModule,
	MatInputModule,
	MatTableModule,
	MatToolbarModule,
	MatTooltipModule,
	MatMenuModule,
	MatSnackBarModule
} from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		CommonModule,
		MatCardModule,
		MatButtonModule,
		MatIconModule,
		MatDialogModule,
		MatCheckboxModule,
		MatInputModule,
		MatTableModule,
		MatToolbarModule,
		MatTooltipModule,
		MatMenuModule,
		FlexLayoutModule,
		RouterModule,
		MatSnackBarModule
	],
	exports: [
		MoviesListComponent
	],
	declarations: [
		MoviesListComponent
	]
})
export class MoviesListModule { }

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
	MatSnackBarModule,
	MatPaginatorModule,
	MatProgressBarModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { PipesModule } from 'src/app/common/pipes/pipes.module';
import { FormsModule } from '@angular/forms';

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
		MatSnackBarModule,
		PipesModule,
		MatPaginatorModule,
		MatProgressBarModule,
		FormsModule
	],
	exports: [
		MoviesListComponent
	],
	declarations: [
		MoviesListComponent
	]
})
export class MoviesListModule { }

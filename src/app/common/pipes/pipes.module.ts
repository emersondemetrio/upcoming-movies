import { NgModule } from "@angular/core";
import { ExcerptPipe } from './excerpt.pipe';

@NgModule({
	declarations: [ExcerptPipe],
	exports: [ExcerptPipe]
})
export class PipesModule { }

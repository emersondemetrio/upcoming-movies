import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'excerpt' })
export class ExcerptPipe implements PipeTransform {
	transform(text: string, at: number = 30): string {
		if(text.length > at) {
			return `${text.substring(0, at)}...`;
		}
		return text;
	}
}

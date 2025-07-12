import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'description',
    standalone: false
})
export class DescriptionPipe implements PipeTransform {

  transform(value: string): string {
      const firstParagraphRegex = /(<p>.*?<\/p>)/s; // Match the first <p>...</p>, including tags
      return value.match(firstParagraphRegex)?.[0] || ""; // Extract or fallback to an empty string

  }

}

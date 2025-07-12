import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'removeBr',
    standalone: false
})
export class RemoveBrPipe implements PipeTransform {

  transform(value: string): string {
    return value.replaceAll("<br>", "").replaceAll("<br />", "");
  }

}

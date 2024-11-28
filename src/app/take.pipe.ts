import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'take'
})
export class TakePipe implements PipeTransform {

  transform<T>(value: T[], take: number): T[] {
    return value.slice(0, take);
  }

}

import { Pipe, PipeTransform } from '@angular/core';

/**
 * Gets the length of a provided array.
 */
@Pipe({
  name: 'length'
})
export class LengthPipe implements PipeTransform {

  transform(value: unknown[]): number {
    return value.length;
  }

}
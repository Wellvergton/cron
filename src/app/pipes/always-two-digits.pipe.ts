import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alwaysTwoDigits'
})
export class AlwaysTwoDigitsPipe implements PipeTransform {

  transform(value: number): string {
    return value < 10 ? '0'.concat(value.toString()) : value.toString();
  }

}

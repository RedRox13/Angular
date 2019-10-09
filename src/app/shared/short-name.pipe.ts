import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'shortName'
})
export class ShortNamePipe implements PipeTransform {
  transform(value: string, limit: number): any {
    if (value.length > limit) {
      return `${value.slice(0, limit)}...`;
    } else {
      return value;
    }
  }
}

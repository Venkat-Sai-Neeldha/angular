import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString'
})
export class ReverseStringPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if(value.length == 0) {
      return '';
    }
    return value.split('').reverse().join('');
  }
}
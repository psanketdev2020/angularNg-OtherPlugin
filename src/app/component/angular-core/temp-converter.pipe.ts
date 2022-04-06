import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempConverter'
})
export class TempConverterPipe implements PipeTransform {

  transform(value: number, unit: string) {
    // console.log(value, unit);
    if (value && !isNaN(value)) {
      if (unit === 'C') {
        let temp = (value - 32) / 1.8;
        return temp.toFixed(2);
      } else if (unit === 'F') {
        let temp = (value * 1.8) + 32;
        return temp.toFixed(2);
      }
    }
    return;
  }

}

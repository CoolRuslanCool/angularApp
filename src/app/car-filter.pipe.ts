import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

  transform(cars: {name: string, year: number}[], searchString: string, paramName: string): any {
    if (cars.length === 0 || searchString === null || searchString === '') {
      return cars;
    }
    return cars.filter((car) => car[paramName].toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

}

import {Logger} from './app-logger-util';
import {Injectable} from '@angular/core';

@Injectable()
export class CarService {


  constructor(private logger: Logger) {
  }

  cars = [
    {name: 'Ford', sold: false},
    {name: 'Mazda', sold: false},
    {name: 'Mercedes', sold: true},
    {name: 'Opel', sold: false}
    ];

  addCar(name: string) {
    this.cars.push({name, sold: false});
    this.logger.log(`Add car: ${name}.`);
  }

  deleteCar(name: string) {
    this.cars = this.cars.filter(car => car.name !== name);
  }

}

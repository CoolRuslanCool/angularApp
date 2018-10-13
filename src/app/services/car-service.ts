import {Logger} from './app-logger-util';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Car} from '../cars/cars.component';

@Injectable()
export class CarService {


  constructor(private logger: Logger, private http: HttpClient) {
  }

  cars = [
    {name: 'Ford', sold: false},
    {name: 'Mazda', sold: false},
    {name: 'Mercedes', sold: true},
    {name: 'Opel', sold: false}
    ];

  addCar(name: string) {
    // this.cars.push({name, sold: false});
    // this.logger.log(`Add car: ${name}.`);
    return this.http.post('http://localhost:3004/cars', { name, sold: false});
  }

  deleteCar(id: number) {
    // this.cars = this.cars.filter(car => car.name !== name);
    return this.http.delete(`http://localhost:3004/cars/${id}`);
  }

  // http
  getCars() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf8',
      'MyHeader': 'Hello'
    });
    return this.http.get('http://localhost:3104/cars', { headers });
  }

  updateName(carItem: Car, name: string) {
    carItem.name = name;
    return this.http.put(`http://localhost:3004/cars/${carItem.id}`, carItem);
  }

}

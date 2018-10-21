import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {CarService} from '../services/car-service';
import {Logger} from '../services/app-logger-util';

export interface Car {
  name: string;
  sold: boolean;
  id: number;
}

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  searchName = '';
  carsHeader = of('HHHHeader').pipe(delay(3000));
  carServiceHeader: string;
  carServName = '';
  carServNameChange = '';

  name: string;
  cars: { name: string; year: number }[] = [
    {name: 'Ford', year: 2015},
    {name: 'Opel', year: 2017},
    {name: 'Mazda', year: 2013}
  ];
  cars2: any;
  // cars2: { name: string; sold: boolean; id: number }[] = [];

  carsFromService = [];

  number: number;

  nums = [1, 2, 3];

  constructor(private  carService: CarService, private logger: Logger) {
    this.name = 'constructor name';
  }

  ngOnInit() {
    // this.carServiceHeader = this.carService.getHeader('RU');
  }

  setNumber(num: number) {
    this.number = num;
  }

  get() {
    return this.name;
  }

  addCar(car) {
    this.cars.push(car);
  }

  getCars() {
    this.cars2 = this.carService.getCars();
    // this.carService.getCars().subscribe(
    //   (response: { name: string; sold: boolean; id: number }[]) => {
    //     // this.logger.log(response);
    //     this.cars2 = response;
    //   },
    //   error => this.logger.log(error)
    // );
  }

  addCarServ() {
    this.carService.addCar(this.carServName).subscribe(data => {
      this.cars2 = [...this.cars2, {name: data['name'], sold: data['sold'], id: data['id']}];
    });
  }

  updateCarNameServ(carItem: Car) {
    this.carService.updateName(carItem, this.carServNameChange).subscribe((car: Car) => {
      this.cars2 = this.cars2.filter((car: Car) => car.name !== carItem.name);
    });
  }

  deleteCarServ(id: number) {
    this.carService.deleteCar(id).subscribe((car: Car) => {
      this.cars2 = this.cars2.filter((car: Car) => car.id !== id);
    });
  }
}

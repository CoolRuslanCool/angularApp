import { Component, OnInit } from '@angular/core';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  searchName = '';
  carsHeader = of('HHHHeader').pipe(delay(3000));

  name: string;
  cars: { name: string; year: number }[] = [
    {name: 'Ford', year: 2015},
    {name: 'Opel', year: 2017},
    {name: 'Mazda', year: 2013}
  ];
  number: number;

  nums = [1, 2, 3];

  constructor() {
    this.name = 'constructor name';
  }

  ngOnInit() {
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
}

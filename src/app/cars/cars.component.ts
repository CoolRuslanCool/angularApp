import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  name: string;

  cars: { name: string; year: number }[] = [
    {name: 'Ford', year: 2015},
    {name: 'Opel', year: 2017},
    {name: 'Mazda', year: 2013}
  ];

  constructor() {
    this.name = 'constructor name';
  }

  ngOnInit() {
  }

  get() {
    console.log('log before get name: ' + this.name);
    return this.name;
  }
  addCar(car) {
    this.cars.push(car);
  }
}

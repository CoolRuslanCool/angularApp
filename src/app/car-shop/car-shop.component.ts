import {Component, OnInit} from '@angular/core';
import {CarService} from '../services/car-service';
import {Logger} from '../services/app-logger-util';

@Component({
  selector: 'app-car-shop',
  templateUrl: './car-shop.component.html',
  styleUrls: ['./car-shop.component.css']
})
export class CarShopComponent implements OnInit {

  cars = [];

  constructor(private carService: CarService, private logger: Logger) {
  }

  ngOnInit() {
    this.cars = this.carService.cars;
  }
}

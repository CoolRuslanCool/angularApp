import {Component, Input, OnInit} from '@angular/core';
import {CarService} from '../services/car-service';
import {Logger} from '../services/app-logger-util';

@Component({
  selector: 'app-add-new-car',
  templateUrl: './add-new-car.component.html',
  styleUrls: ['./add-new-car.component.css']
})
export class AddNewCarComponent implements OnInit {

  name = '';

  constructor(private service: CarService, private logger: Logger) { }

  ngOnInit() {
  }

  addCar() {
    this.service.addCar(this.name);
    this.name = '';
  }

}

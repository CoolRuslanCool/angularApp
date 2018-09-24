import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  name = '';
  year = 2000;

  @Output('addCar')
  addEmitter = new EventEmitter<{name: string, year: number}>();

  constructor() { }

  ngOnInit() {
  }

  addEventEmit() {
    this.addEmitter.emit({
      name: this.name,
      year: this.year
    });

    this.name = '';
    this.year = 2000;
  }
}

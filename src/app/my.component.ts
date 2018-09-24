import {Component} from '@angular/core';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: [
    './my.component.css'
  ]
})
export class MyComponent {

  myText = 'my text component field';
  exist = false;
  textOnClick = '';
  textOnKeyUp = '';
  pushed = false;
  name = '';
  year: number;
  cars = ['car1', 'car2', 'car3', 'car4'];
  items = [{id: 3, name: 'name1'}, {id: 4, name: 'name4'}, {id: 5, name: 'name5'}];

  isExist() {
    return this.exist;
  }

  onClick(event) {
    this.textOnClick = 'ddddd';
  }

  onKeyup1(event) {
    this.textOnKeyUp = event.target.value;
  }
  onKeyup2(value) {
    this.textOnKeyUp = value;
  }

  addCar() {
    this.pushed = !this.pushed;
  }
}

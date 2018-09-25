import {Component, EventEmitter, OnInit, Output, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {



  // name = '';
  // year = 2000;

  @Output('addCar')
  addEmitter = new EventEmitter<{name: string, year: number}>();

  @ViewChild('labelYear')
  inputYearLabel: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  addEventEmit(name: HTMLInputElement) {
    this.addEmitter.emit({
      name: name.value,
      year: +this.inputYearLabel.nativeElement.value
    });

    name.value = '';
    this.inputYearLabel.nativeElement.value = 2000;
    // this.name = '';
    // this.year = 2000;
  }
}

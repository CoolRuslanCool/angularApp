import {Component, OnInit, Input, ViewChild, AfterViewInit, ContentChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit, AfterViewInit {

  // name: 'refName';

  @Input()
  car: {name: string, sold: boolean};

  // @ContentChild
  // ('headerContent')
  // header: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // console.log(this.header);
    // console.log(this.header.nativeElement.innerText);
  }

  changeStatus(event: string) {
    if (event === 'sell') {
      this.car.sold = true;
    }
    if (event === 'return') {
      this.car.sold = false;
    }
  }

}

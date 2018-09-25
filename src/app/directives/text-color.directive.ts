import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective implements OnInit {

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    const style = this.element.nativeElement.style;
    style.color = 'red';
    style.backgroundColor = 'darkcyan';
  }


}

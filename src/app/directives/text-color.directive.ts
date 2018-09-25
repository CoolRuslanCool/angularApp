import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const nativeElement = this.element.nativeElement;
    this.renderer.setStyle(nativeElement, 'color', 'blue');
    this.renderer.setStyle(nativeElement, 'backgroundColor', 'red');
    // const style = this.element.nativeElement.style;
    // style.color = 'red';
    // style.backgroundColor = 'darkcyan';
  }


}

import {Directive, ElementRef, OnInit, Renderer2, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective implements OnInit {

  @HostBinding('style.color')
  private color: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // const nativeElement = this.element.nativeElement;
    // this.renderer.setStyle(nativeElement, 'color', 'blue');
    // this.renderer.setStyle(nativeElement, 'backgroundColor', 'red');
    // const style = this.element.nativeElement.style;
    // style.color = 'red';
    // style.backgroundColor = 'darkcyan';
  }

  @HostListener('mouseenter', ['$event'])
  colorChange(event: Event) {
    this.color = 'red';
  }

  @HostListener('mouseleave', ['$event'])
  colorReset(event: Event) {
    this.color = 'black';
  }


}

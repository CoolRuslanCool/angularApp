import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  HostBinding,
  HostListener,
  Input,
  ApplicationRef
} from '@angular/core';
import Log from '../app-logger-util';

@Directive({
  host: {'(mouseenter)': 'colorChange()'},
  selector: '[appTextColor]'
})
export class TextColorDirective implements OnInit {

  number: number;

  @Input()
  directiveParam: string;

  @Input('appTextColor')
  private appColor: {col1: string, col2: string};

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

  // @HostListener('mouseenter', ['$event'])
  // colorChange(event: Event) {
  //   this.color = this.appColor.col1;
  // }
  colorChange() {
    this.color = this.appColor.col1;
  }

  @HostListener('mouseleave', ['$event'])
  colorReset(event: Event) {
    Log(this.directiveParam);
    this.color = this.appColor.col2;
  }


}

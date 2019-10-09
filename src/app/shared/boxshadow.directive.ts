import { Directive, ElementRef, HostListener  } from '@angular/core';
@Directive({
  selector: '[appBoxshadow]'
})
export class BoxshadowDirective {
  constructor(private el: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('0 0 2vw black');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  private highlight(param: string) {
    this.el.nativeElement.style.boxShadow = param;
  }
}

import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMainText]'
})
export class MainTextDirective {

  constructor(
    private elemento: ElementRef,
    private renderer: Renderer2
  ) {
    renderer.setStyle(elemento.nativeElement, 'color', 'red')
  }

}

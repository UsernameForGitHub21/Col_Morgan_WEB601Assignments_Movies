import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {

  constructor(private elm: ElementRef) {
    elm.nativeElement.style.fontWeight = "bold";
   }

}

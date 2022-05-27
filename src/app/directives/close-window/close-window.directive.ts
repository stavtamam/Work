import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appCloseWindow]'
})
export class CloseWindowDirective {
  @Output() clicked = new EventEmitter<MouseEvent>();
  constructor(private elementRef: ElementRef) { }


}

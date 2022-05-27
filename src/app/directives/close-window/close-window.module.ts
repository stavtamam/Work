import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CloseWindowDirective} from "./close-window.directive";



@NgModule({
  declarations: [CloseWindowDirective],
  imports: [
    CommonModule
  ],
  exports: [
    CloseWindowDirective
  ]
})
export class CloseWindowModule { }

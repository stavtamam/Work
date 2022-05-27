import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookNowComponent} from "./book-now.component";
import {RouterModule} from "@angular/router";
import {MatFormFieldModule} from "@angular/material/form-field";
import {DogDatePickerModule} from "@dog-style";
import {ReactiveFormsModule} from "@angular/forms";





@NgModule({
  declarations: [BookNowComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: BookNowComponent}]),
    MatFormFieldModule,
    DogDatePickerModule,
    ReactiveFormsModule

  ],
  exports: [
    BookNowComponent
  ]
})
export class BookNowModule { }

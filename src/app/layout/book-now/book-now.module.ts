import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookNowComponent} from "./book-now.component";
import {RouterModule} from "@angular/router";
import {MatFormFieldModule} from "@angular/material/form-field";
import {DogDatePickerModule, DogInputModule, SelectInputModule, TimePickerModule} from "@dog-style";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";





@NgModule({
  declarations: [BookNowComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: BookNowComponent}]),
    MatFormFieldModule,
    DogDatePickerModule,
    ReactiveFormsModule,
    DogInputModule,
    MatButtonModule,
    TimePickerModule,
    SelectInputModule

  ],
  exports: [
    BookNowComponent
  ]
})
export class BookNowModule { }

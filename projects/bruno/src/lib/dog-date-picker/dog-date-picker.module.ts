import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogDatePickerComponent } from './dog-date-picker.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {ReactiveFormsModule} from "@angular/forms";
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    DogDatePickerComponent
  ],
  exports:[
    DogDatePickerComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatInputModule
  ]
})
export class DogDatePickerModule { }

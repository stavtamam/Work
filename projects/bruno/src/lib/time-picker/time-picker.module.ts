import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePickerComponent } from './time-picker.component';
import {NgxMaterialTimepickerModule} from "ngx-material-timepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {NgxMatTimepickerModule} from "ngx-mat-timepicker";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    TimePickerComponent
  ],
  imports: [
    CommonModule,
    NgxMaterialTimepickerModule,
    MatFormFieldModule,
    NgxMatTimepickerModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [
    TimePickerComponent
  ]
})
export class TimePickerModule { }

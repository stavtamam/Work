import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {RegisterComponent} from "./register.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {DogDatePickerModule, DogInputModule} from "@dog-style";



@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '',component:RegisterComponent}]),
    ReactiveFormsModule,
    MatButtonModule,
    DogInputModule,
    DogDatePickerModule
  ],

})
export class RegisterModule { }

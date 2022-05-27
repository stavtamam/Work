import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogInputComponent } from './dog-input.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    DogInputComponent
  ],
  exports:[
    DogInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule
  ],

})
export class DogInputModule { }

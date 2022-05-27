import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedListComponent } from './feed-list.component';
import {MatCardModule} from "@angular/material/card";
import {MatDialogRef} from "@angular/material/dialog";



@NgModule({
  declarations: [
    FeedListComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [
    FeedListComponent
  ]
})
export class FeedListModule { }

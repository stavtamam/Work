import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FeedComponent} from "./feed.component";
import {FeedListModule} from "./feed-list/feed-list.module";
import {CardPreviewComponent} from "./card-preview/card-preview.component";
import { RouterModule, Routes} from "@angular/router";
import {CloseWindowModule} from "../../directives/close-window/close-window.module";
import {MatDialogModule} from "@angular/material/dialog";


const routes: Routes = [
  {path: '', component: FeedComponent }
];

@NgModule({
  declarations: [
    FeedComponent,
    CardPreviewComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FeedListModule,
    CloseWindowModule,
    MatDialogModule

  ],
  exports: [
    FeedComponent,
    CardPreviewComponent
  ]
})
export class FeedModule { }

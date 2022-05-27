import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {CARDS} from "./card.mock";
import {ICard} from "./card.interface";
import {AppService} from "../../../app.service";
import {FeedService} from "../feed.service";
import {MatDialog} from "@angular/material/dialog";
import {CardPreviewComponent} from "../card-preview/card-preview.component";

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedListComponent implements OnInit {
  @Input() card?: ICard;
  //@Input() clicked?: boolean;
  constructor(
    private appService:AppService,
    private feedService:FeedService ,
    private changeDetectorRef: ChangeDetectorRef,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  // public get current():ICard {
  //   return this.feedService?.currentCard as ICard;
  // }
  previewClick() {
    this.feedService.preview(this.card);
    //this.clicked = true;
    //console.log(this.clicked);
    this.changeDetectorRef.detectChanges();
  }

}

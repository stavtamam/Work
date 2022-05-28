import {ICard} from "../../../mock/card.interface";
import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AppService} from "../../../app.service";
import {FeedService} from "../feed.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class FeedListComponent implements OnInit {
  @Input() card?: ICard;
  @Input() clicked?: boolean;
  @Output() newItemEvent = new EventEmitter<boolean>();

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

  previewClick(clicked: boolean) {
    this.newItemEvent.emit(clicked);
    this.feedService.preview(this.card);
    this.changeDetectorRef.detectChanges();
  }

}

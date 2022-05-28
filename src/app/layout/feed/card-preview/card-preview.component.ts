import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FeedService} from "../feed.service";
import {ICard} from "../../../mock/card.interface";

@Component({
  selector: 'app-card-preview',
  templateUrl: './card-preview.component.html',
  styleUrls: ['./card-preview.component.scss'],
changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardPreviewComponent implements OnInit {
  card$ = this.feedService.currentCard$;
  @Input() clicked?: boolean;
  @Output() newItemEvent = new EventEmitter<boolean>();


  constructor(
    private feedService:FeedService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  togglePopUp(clicked: boolean):void{
    this.newItemEvent.emit(clicked);
  }

  registeredToCard(){
  }

}

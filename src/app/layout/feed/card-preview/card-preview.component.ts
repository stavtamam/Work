import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnInit, Output} from '@angular/core';
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
  //clicked$ = this.feedService.clicked$;
  //@Input() clicked?: boolean;
  clicked?:boolean= false;

  constructor(
    private feedService:FeedService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    //console.log(this.clicked);
  }
  togglePopUp():void{
    //this.feedService.clicked$.next(false);
    this.clicked = !this.clicked;
    this.changeDetectorRef.detectChanges();
  }
  registeredToCard(){
      //this.feedService.

  }

}

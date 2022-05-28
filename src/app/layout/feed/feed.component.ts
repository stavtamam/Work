import {ChangeDetectionStrategy, Component, Inject, Input, OnInit} from '@angular/core';
import {CARDS} from "../../mock/card.mock";



@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedComponent implements OnInit {
  public cards = [...CARDS];
  // public cardProduct: ICard[] = [];
 // clicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}

import {CARDS} from "../../mock/card.mock";
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedComponent implements OnInit {
  public cards = [...CARDS];
  clicked: boolean = true;

  constructor() { }

  handleClick(newValue: boolean) {
    this.clicked = newValue;
  }

  ngOnInit(): void {
  }

}

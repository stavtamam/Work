import { Injectable } from '@angular/core';
import {ICard, IPrice} from "../../mock/card.interface";
import {BehaviorSubject, ReplaySubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  currentCard?:ICard;
  currentCard$= new ReplaySubject<ICard | undefined>(1);
  clicked$ = false;
  constructor() { }

  preview(card: ICard | undefined){
    this.currentCard = card;
    this.currentCard$.next(card);
  }

}

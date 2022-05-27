import { Injectable } from '@angular/core';
import {ICard, IPrice} from "./feed-list/card.interface";
import {BehaviorSubject, ReplaySubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  currentCard?:ICard;
  currentCard$= new ReplaySubject<ICard | undefined>(1);
  clicked$ = new BehaviorSubject<boolean>(false);
  constructor() { }

  toggleModal(){
    this.clicked$.asObservable();
  }


  preview(card: ICard | undefined){
    this.currentCard = card;
    this.currentCard$.next(card);
  }

}



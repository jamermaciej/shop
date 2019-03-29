import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Card } from './../model/card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private cardsObs = new BehaviorSubject<Array<Card>>([]);

  constructor() {
    const cards = [
      {cardNumber: 12344444444, ccv: '11/20', cardHolder: 'Card 1', expiredDate: new Date()},
      {cardNumber: 123123123123, ccv: '11/20', cardHolder: 'Card 2', expiredDate: new Date()}
    ];
    this.cardsObs.next(cards);
  }

  getCardsObs(): Observable<Array<Card>> {
    return this.cardsObs.asObservable();
  }

  addCard(card) {
    const cardsList = this.cardsObs.getValue();
    cardsList.push(card);
    this.cardsObs.next(cardsList);
  }
}

import { CardsService } from './../services/cards.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../model/card';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  // cards = [];
  selectedOption;

  cards: Observable<Card[]>;

  constructor(private cardsService: CardsService, private store: Store<AppState>) { }

  ngOnInit() {
    this.cardsService.getCardsObs().subscribe( (card) => {
      // this.cards = card;
      this.cards = this.store.select('card');
      this.selectedOption = card[card.length - 1].cardHolder;
    });
  }
}

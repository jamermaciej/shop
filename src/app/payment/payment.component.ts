import { CardsService } from './../services/cards.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../model/card';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import * as CardActions from './../actions/card.actions';
import * as rd from './../reducers/card.reducer';
import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  // cards = [];
  selectedOption = 'Tom Cap';

  cards: Observable<Card[]>;
  selectedCard: Observable<Card>;

  constructor(private cardsService: CardsService, private store: Store<AppState>) { }

  ngOnInit() {
    // this.selectedCard = this.store.select('selectedCard');
    this.cards = this.store.select(rd.selectFeatureCount);
    this.store.select(rd.selectCurrentCard).subscribe(value => {
      this.selectedOption = value;
    });

    // this.cardsService.getCardsObs().subscribe( (card) => {
    //   // this.cards = card;
    //   this.selectedOption = card[card.length - 1].cardHolder;
    // });
    this.chooseCard();
  }

  chooseCard() {
    this.store.dispatch(new CardActions.SelectCard(this.selectedOption));
  }
  getAddCard() {
    this.store.select(rd.selectCurrentCard).subscribe(value => {
      this.selectedOption = value;
    });
  }
}

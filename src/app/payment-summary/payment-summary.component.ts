import { AppState } from './../app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Card } from '../model/card';
import { Observable, pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as rd from './../reducers/card.reducer';

@Component({
  selector: 'app-payment-summary',
  templateUrl: './payment-summary.component.html',
  styleUrls: ['./payment-summary.component.scss']
})
export class PaymentSummaryComponent implements OnInit {

  card: Observable<Card>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.card = this.store.select(rd.selectedCardFull);

    // this.card = this.store.select(state => state.cards.selectedCard);


      // .pipe(
      //   map(items => items.filter(item => item.active === false ))
      // ).subscribe(val => {
      //   this.card = val;
      // });
  }
}

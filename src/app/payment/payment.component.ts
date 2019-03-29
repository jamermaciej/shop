import { CardsService } from './../services/cards.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  cards = [];
  selectedOption;

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
    this.cardsService.getCardsObs().subscribe( (card) => {
      this.cards = card;
      this.selectedOption = card[card.length - 1].cardHolder;
    });
  }
}

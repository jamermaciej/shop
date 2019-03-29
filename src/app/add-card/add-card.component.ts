import { CardsService } from './../services/cards.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CardValidators } from './../validators/cardValidator';
import { Card } from './../model/card';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {

  addCardForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private cardService: CardsService) { }

  ngOnInit() {
    this.addCardForm = this.formBuilder.group({
      cardNumber: ['', Validators.max(3)],
      ccv: ['', Validators.required],
      cardHolder: ['', Validators.required],
      expiredDate: ['', Validators.required]
    });
  }

  detectCardType(number: number) {
    const valid = {
        electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
        maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
        dankort: /^(5019)\d+$/,
        interpayment: /^(636)\d+$/,
        unionpay: /^(62|88)\d+$/,
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        mastercard: /^5[1-5][0-9]{14}$/,
        amex: /^3[47][0-9]{13}$/,
        diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        jcb: /^(?:2131|1800|35\d{3})\d{11}$/
    };

    for (const key in valid) {
        if (valid[key].test(number)) {
            return true;
        }
      }
    }

  onSubmit() {
    if (this.addCardForm.invalid ) {
      return;
    }
    this.cardService.addCard(this.addCardForm.value);
    this.router.navigate(['/payment']);
  }
}

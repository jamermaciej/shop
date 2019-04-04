import { Action } from '@ngrx/store';
import { Card } from './../model/card';
import * as CardActions from './../actions/card.actions';

const initialState: Card = {
  cardNumber: 3412334587676567,
  ccv: 231,
  cardHolder: 'Adam Małysz',
  expiredMonth: 12,
  expiredYear: 10,
};


export function reducer(state: Card[] = [initialState], action: CardActions.Actions) {
  switch (action.type) {
    case CardActions.ADD_CARD:
      return [...state, action.payload];
    default:
      return state;
  }
}



import { AppState } from './../app.state';
import { Action } from '@ngrx/store';
import { Card } from './../model/card';
import * as CardActions from './../actions/card.actions';

const initialState: AppState = {
  allCards: [
    {
      cardNumber: 3412334587676567,
      ccv: 231,
      cardHolder: 'Adam Małysz',
      expiredMonth: 12,
      expiredYear: 10
    },
    {
      cardNumber: 3412334587676567,
      ccv: 231,
      cardHolder: 'Tom Cap',
      expiredMonth: 12,
      expiredYear: 10
    },
  ],
  selectedCard: null
};

export function reducer(state = initialState, action: CardActions.Actions): AppState {
  switch (action.type) {
    case CardActions.ADD_CARD: {
      return {
        allCards: [...state.allCards, action.payload],
        selectedCard: action.payload.cardHolder
      };
    }
    case CardActions.SELECT_CARD: {
      return {
        ...state,
        selectedCard: action.payload
      };
    }
    default: {
      return state;
    }
  }
}

import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getAllCards = createFeatureSelector('cards');
export const selectFeatureCount = createSelector(
  getAllCards,
  (cards: AppState) => cards.allCards
);
export const selectCurrentCard = createSelector(
  getAllCards,
  (cards: AppState) => cards.selectedCard
);
export const selectedCardFull = createSelector(
  selectFeatureCount,
  selectCurrentCard,
  // tslint:disable-next-line:no-shadowed-variable
  (selectFeatureCount: Card[] , selectCurrentCard: string) => {
    const [ card ] = selectFeatureCount.filter( value => value.cardHolder === selectCurrentCard);
    return card;
  }
);



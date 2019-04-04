import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Card } from './../model/card';

export const ADD_CARD = '[CARD] Add';

export class AddCard implements Action {
    readonly type = ADD_CARD;

    constructor (public payload: Card) {}
}

export type Actions = AddCard;

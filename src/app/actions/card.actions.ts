import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Card } from './../model/card';

export const ADD_CARD = '[CARD] Add';
export const SELECT_CARD = '[CARD] Select';

export class AddCard implements Action {
    readonly type = ADD_CARD;
    constructor (public payload: Card) {}
}

export class SelectCard implements Action {
    readonly type = SELECT_CARD;
    constructor (public payload: string) {}
}

export type Actions = AddCard | SelectCard;

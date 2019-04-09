import { Card } from './model/card';

export interface AppState {
    readonly allCards: Card[];
    readonly selectedCard: string;
}



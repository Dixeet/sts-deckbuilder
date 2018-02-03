import {Injectable} from '@angular/core';
import {Deck} from './deck';

@Injectable()
export class DeckBuilderService {
  public deck: Deck;

  constructor() {
    this.deck = new Deck();
  }

  public reset(): void {
    this.deck = new Deck();
  }

  public addCard(card): void {
    this.deck.cards.push(card);
  }

  public upgrade(index): void {
    this.deck.cards[index].isUpgraded = true;
  }

  public downgrade(index): void {
    this.deck.cards[index].isUpgraded = false;
  }

  public markImportant(index): void {
    this.deck.cards[index].isImportant = true;
  }

  public  unmarkImportant(index): void {
    this.deck.cards[index].isImportant = false;
  }

}

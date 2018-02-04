import {Injectable} from '@angular/core';
import {Deck} from './deck';
import {DeckStepper} from './deck-stepper';

@Injectable()
export class DeckBuilderService {
  public deck: Deck;
  public stepper: DeckStepper;

  constructor() {
    this.deck = new Deck();
    this.stepper = new DeckStepper();
  }

  public reset(): void {
    this.deck = new Deck();
  }

  public setStepper(stepper): void {
    this.stepper.stepperObject = stepper;
  }

  public addCard(card): void {
    this.deck.cards.push(card);
  }

  public upgrade(index): void {
    this.deck.cards[index].upgrade();
  }

  public downgrade(index): void {
    this.deck.cards[index].downgrade();
  }

  public markImportant(index): void {
    this.deck.cards[index].markImportant();
  }

  public  unmarkImportant(index): void {
    this.deck.cards[index].unmarkImportant();
  }

  public setCharacter(character): void {
    this.deck.characacter = character;
  }

}

import {Injectable} from '@angular/core';
import {Deck} from './deck';
import {DeckStepper} from './deck-stepper';
import {Card} from '../share/card';
import {Relic} from '../share/relic';
import {AbstractDataService} from '../core/abstract-data.service';

@Injectable()
export class DeckBuilderService {
  public deck: Deck;
  public stepper: DeckStepper;

  constructor(private abstractDataService: AbstractDataService) {
    this.deck = new Deck();
    this.stepper = new DeckStepper();
  }

  public reset(): void {
    this.deck = new Deck();
  }

  public setStepper(stepper): void {
    this.stepper.stepperObject = stepper;
  }

  public addCard(card: Card): void {
    this.deck.cards.push(new Card(card));
  }

  public removeCard(index): void {
    this.deck.cards.splice(index, 1);
  }

  public addRelic(relic: Relic): void {
    this.deck.relics.push(new Relic(relic));
  }

  public removeRelic(index): void {
    this.deck.relics.splice(index, 1);
  }

  public setCharacter(character): void {
    this.deck.characacter = character;
  }

  public encode(str) {
    return this.abstractDataService.post('/encode', {toEncode: str});
  }

}

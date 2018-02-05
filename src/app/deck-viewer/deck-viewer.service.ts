import { Injectable } from '@angular/core';
import {AbstractDataService} from '../core/abstract-data.service';
import {Deck} from '../deck-builder/deck';
import {Card} from '../share/card';
import {Relic} from '../share/relic';
import {forkJoin} from 'rxjs/observable/forkJoin';
import {CardsService} from '../cards/cards.service';
import {RelicsService} from '../relics/relics.service';

@Injectable()
export class DeckViewerService {

  public deck: Deck;

  private deckParts;
  private localCards: Card[];
  private localNeutrals: Card[];
  private localRelics: Relic[];

  constructor(private abstractDataService: AbstractDataService, private cardsService: CardsService, private relicsService: RelicsService) {
    this.deck = new Deck();
  }

  public reset(): void {
    this.deck = new Deck();
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

  public decode(str) {
    return this.abstractDataService.post('/decode', {toDecode: str});
  }

  private getAllFor(type) {
    const cardsObs = this.cardsService.getAllCards(type);
    const neutralsObs = this.cardsService.getAllCards('neutral');
    const relicssObs = this.relicsService.getAllRelics();
    return forkJoin(cardsObs, neutralsObs, relicssObs);
  }

  public generateDeckFromCode(code) {
    this.reset();
    this.deck.generatedCode = code;
    this.decodeAndInitDeck();
  }

  private decodeAndInitDeck() {
    this.decode(decodeURIComponent(this.deck.generatedCode)).subscribe((res) => {
      this.deck.buildString = res;
      this.initDeck();
    });
  }

  private initDeck() {
    this.deckParts = this.deck.buildString.split(this.deck.stringSeparator);
    if (this.deckParts[0] === 's') {
      this.deck.characacter = 'silent';
    } else if (this.deckParts[0] === 'i') {
      this.deck.characacter = 'ironclad';
    }
    this.getAllFor(this.deck.characacter).subscribe(res => {
      this.localCards = res[0];
      this.localNeutrals = res[1];
      this.localRelics = res[2];
      this.parseCards();
      this.parseRelics();
      this.parseTitle();
      this.parseDescription();
    });
  }

  private parseTitle() {
    this.deck.title = this.deckParts[3];
  }

  private parseDescription() {
    this.deck.description = this.deckParts[4];
  }

  private parseCards() {
    this.deckParts[1].split('-').forEach(card => {
      this.parseCard(card);
    });
  }

  private parseRelics() {
    this.deckParts[2].split('-').forEach(relic => {
      this.parseRelic(relic);
    });
  }

  private parseCard(card) {
    const isImportant = card.indexOf('!') > -1;
    const isUpgraded = card.indexOf('+') > -1;
    let newCard = this.findCardById(card.replace('!', '').replace('+', ''));
    if (typeof newCard === 'undefined') {
      newCard = this.findNeutralById(card.replace('!', '').replace('+', ''));
    }
    if (typeof newCard !== 'undefined') {
      if (isImportant) {
        newCard.toggleImportant();
      }
      if (isUpgraded) {
        newCard.toggleUpgrade();
      }
      this.addCard(newCard);
    }
  }

  private findCardById(id) {
    for (let card of this.localCards) {
      if (card.id === id) {
        return card;
      }
    }
  }

  private findNeutralById(id) {
    for (let card of this.localNeutrals) {
      if (card.id === id) {
        return card;
      }
    }
  }

  private findRelicById(id) {
    for (let relic of this.localRelics) {
      if (relic.id === id) {
        return relic;
      }
    }
  }

  private parseRelic(relic) {
    const isImportant = relic.indexOf('!') > -1;
    let newRelic = this.findRelicById(relic.replace('!', ''));
    if (typeof newRelic !== 'undefined') {
      if (isImportant) {
        newRelic.toggleImportant();
      }
      this.addRelic(newRelic);
    }
  }

}

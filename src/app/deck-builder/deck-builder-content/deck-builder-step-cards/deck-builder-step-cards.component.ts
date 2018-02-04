import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {DeckBuilderService} from '../../deck-builder.service';
import {Card} from '../../../share/card';
import {CardsService} from '../../../cards/cards.service';

@Component({
  selector: 'app-deck-builder-step-cards',
  templateUrl: './deck-builder-step-cards.component.html',
  styleUrls: ['./deck-builder-step-cards.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DeckBuilderStepCardsComponent implements OnInit {

  @Input() stepper;
  cards: Card[];
  baseImgSrc = '/assets/images/standard/cards/';
  constructor(public deckService: DeckBuilderService, private cardService: CardsService) { }

  public filterByType(type) {
    let filteredCards = [];
    if (this.cards && this.cards.length > 0) {
      filteredCards = this.cards.filter(card => {
        if (card.type === type) {
          return card;
        }
      });
    }
    return filteredCards;
  }

  ngOnInit() {
    this.cardService.getAllCards(this.deckService.deck.characacter).subscribe(cards => this.cards = cards);
  }

}

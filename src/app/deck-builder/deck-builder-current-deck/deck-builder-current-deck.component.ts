import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DeckBuilderService} from '../deck-builder.service';

@Component({
  selector: 'app-deck-builder-current-deck',
  templateUrl: './deck-builder-current-deck.component.html',
  styleUrls: ['./deck-builder-current-deck.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DeckBuilderCurrentDeckComponent implements OnInit {

  baseImgSrc = '/assets/images/small/cards/';
  baseImgRelicSrc = '/assets/images/small/relics/';
  constructor(public deckService: DeckBuilderService) { }

  public filterByType(type) {
    let filteredCards = [];
    if (this.deckService.deck.cards && this.deckService.deck.cards.length > 0) {
      filteredCards = this.deckService.deck.cards.filter(card => {
        if (card.type === type) {
          return card;
        }
      });
    }
    return filteredCards;
  }

  ngOnInit() {
  }

}

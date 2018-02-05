import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DeckBuilderService} from '../../deck-builder.service';

@Component({
  selector: 'app-deck-builder-step-final',
  templateUrl: './deck-builder-step-final.component.html',
  styleUrls: ['./deck-builder-step-final.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DeckBuilderStepFinalComponent implements OnInit {

  public deck;
  baseImgSrc = '/assets/images/standard/cards/';
  baseImgRelicSrc = '/assets/images/standard/relics/';

  constructor(private deckService: DeckBuilderService) {
    this.deck = this.deckService.deck;
  }

  public filterCardsByType(type) {
    let filteredCards = [];
    if (this.deck.cards && this.deck.cards.length > 0) {
      filteredCards = this.deck.cards.filter(card => {
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

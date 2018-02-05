///<reference path="../../../node_modules/rxjs/observable/forkJoin.d.ts"/>
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TitleService} from '../core/title.service';
import {ActivatedRoute} from '@angular/router';
import {DeckViewerService} from './deck-viewer.service';

@Component({
  selector: 'app-deck-viewer',
  templateUrl: './deck-viewer.component.html',
  styleUrls: ['./deck-viewer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DeckViewerComponent implements OnInit {

  public code;
  public deck;
  baseImgSrc = '/assets/images/standard/cards/';
  baseImgRelicSrc = '/assets/images/standard/relics/';

  constructor(private route: ActivatedRoute, private titleService: TitleService, private deckService: DeckViewerService) {
    this.titleService.setTitle('Deck Viewer');
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
    this.route.queryParams.subscribe(params => {
      if (params.code) {
        this.code = params.code;
        this.deckService.generateDeckFromCode(this.code);
        this.deck = this.deckService.deck;
      }
    });
  }

}

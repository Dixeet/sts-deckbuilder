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
  constructor(public deckService: DeckBuilderService) { }

  ngOnInit() {
  }

}

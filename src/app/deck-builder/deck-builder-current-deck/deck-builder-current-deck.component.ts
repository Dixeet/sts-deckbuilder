import { Component, OnInit } from '@angular/core';
import {DeckBuilderService} from '../deck-builder.service';

@Component({
  selector: 'app-deck-builder-current-deck',
  templateUrl: './deck-builder-current-deck.component.html',
  styleUrls: ['./deck-builder-current-deck.component.css']
})
export class DeckBuilderCurrentDeckComponent implements OnInit {

  constructor(public deckService: DeckBuilderService) { }

  ngOnInit() {
  }

}

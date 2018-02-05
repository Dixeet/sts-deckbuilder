import { Component, OnInit } from '@angular/core';
import {DeckBuilderService} from '../../deck-builder.service';

@Component({
  selector: 'app-deck-builder-step-final',
  templateUrl: './deck-builder-step-final.component.html',
  styleUrls: ['./deck-builder-step-final.component.css']
})
export class DeckBuilderStepFinalComponent implements OnInit {

  public deck;
  constructor(private deckService: DeckBuilderService) {
    this.deck = this.deckService.deck;
  }

  ngOnInit() {
  }

}

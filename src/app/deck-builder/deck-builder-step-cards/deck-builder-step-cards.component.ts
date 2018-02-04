import {Component, Input, OnInit} from '@angular/core';
import {DeckBuilderService} from '../deck-builder.service';

@Component({
  selector: 'app-deck-builder-step-cards',
  templateUrl: './deck-builder-step-cards.component.html',
  styleUrls: ['./deck-builder-step-cards.component.css']
})
export class DeckBuilderStepCardsComponent implements OnInit {

  @Input() stepper;
  constructor(public deckService: DeckBuilderService) { }

  ngOnInit() {
  }

}

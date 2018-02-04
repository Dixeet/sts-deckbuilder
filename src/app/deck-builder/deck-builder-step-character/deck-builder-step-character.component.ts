import {Component, Input, OnInit} from '@angular/core';
import {DeckBuilderService} from '../deck-builder.service';

@Component({
  selector: 'app-deck-builder-step-character',
  templateUrl: './deck-builder-step-character.component.html',
  styleUrls: ['./deck-builder-step-character.component.css']
})
export class DeckBuilderStepCharacterComponent implements OnInit {

  @Input() stepper;
  constructor(private deckService: DeckBuilderService) {
  }

  chooseCharacter(character): void {
    this.deckService.reset();
    this.deckService.setCharacter(character);
    this.stepper.next();
    console.log(this.deckService.deck);
  }

  ngOnInit() {
  }

}

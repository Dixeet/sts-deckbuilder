import {Component, OnInit} from '@angular/core';
import {DeckBuilderService} from '../../deck-builder.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-deck-builder-step-character',
  templateUrl: './deck-builder-step-character.component.html',
  styleUrls: ['./deck-builder-step-character.component.css']
})
export class DeckBuilderStepCharacterComponent implements OnInit {

  constructor(private deckService: DeckBuilderService, private router: Router) {
  }

  chooseCharacter(character): void {
    this.deckService.reset();
    this.deckService.setCharacter(character);
    this.deckService.stepper.next();
  }

  ngOnInit() {
    // setTimeout(() => this.chooseCharacter('silent'), 500);
  }

}

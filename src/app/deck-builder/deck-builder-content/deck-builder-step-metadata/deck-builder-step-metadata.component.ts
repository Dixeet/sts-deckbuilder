import { Component, OnInit } from '@angular/core';
import {DeckBuilderService} from '../../deck-builder.service';

@Component({
  selector: 'app-deck-builder-step-metadata',
  templateUrl: './deck-builder-step-metadata.component.html',
  styleUrls: ['./deck-builder-step-metadata.component.css']
})
export class DeckBuilderStepMetadataComponent implements OnInit {

  constructor(public deckService: DeckBuilderService) { }

  ngOnInit() {
  }

}

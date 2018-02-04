import {Component, Input, OnInit} from '@angular/core';
import {DeckBuilderService} from '../deck-builder.service';

@Component({
  selector: 'app-deck-builder-content',
  templateUrl: './deck-builder-content.component.html',
  styleUrls: ['./deck-builder-content.component.css']
})
export class DeckBuilderContentComponent implements OnInit {

  constructor(private deckService: DeckBuilderService) {

  }

  ngOnInit() {
  }

}

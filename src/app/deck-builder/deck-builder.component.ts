import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {TitleService} from '../core/title.service';
import {DeckBuilderService} from './deck-builder.service';

@Component({
  selector: 'app-deck-builder',
  templateUrl: './deck-builder.component.html',
  styleUrls: ['./deck-builder.component.css']
})
export class DeckBuilderComponent implements OnInit {

  constructor(private titleService: TitleService, private deckService: DeckBuilderService) {
    this.titleService.setTitle('');
  }

  ngOnInit() {
    this.deckService.reset();
  }



}

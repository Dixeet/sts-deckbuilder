import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-deck-builder-content-title',
  templateUrl: './deck-builder-content-title.component.html',
  styleUrls: ['./deck-builder-content-title.component.css']
})
export class DeckBuilderContentTitleComponent implements OnInit {

  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}

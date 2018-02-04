import {Component, Input, OnInit} from '@angular/core';
import {MatVerticalStepper} from '@angular/material';

@Component({
  selector: 'app-deck-builder-content',
  templateUrl: './deck-builder-content.component.html',
  styleUrls: ['./deck-builder-content.component.css']
})
export class DeckBuilderContentComponent implements OnInit {

  @Input() stepper: MatVerticalStepper;
  constructor() { }

  ngOnInit() {
  }

}

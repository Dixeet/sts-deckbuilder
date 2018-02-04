import {Component, OnInit, ViewChild} from '@angular/core';
import {MatStepper} from '@angular/material';

@Component({
  selector: 'app-deck-builder-stepper',
  templateUrl: './deck-builder-stepper.component.html',
  styleUrls: ['./deck-builder-stepper.component.css']
})
export class DeckBuilderStepperComponent implements OnInit {

  @ViewChild('stepper') stepper: MatStepper;
  constructor() { }

  ngOnInit() {
  }

  next() {
    this.stepper.next();
  }

  previous() {
    this.stepper.previous();
  }

  getCurrentStep(): number {
    return this.stepper.selectedIndex;
  }

}

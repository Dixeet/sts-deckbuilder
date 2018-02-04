import {MatStep, MatStepper} from '@angular/material';

export class DeckStepper {
  public stepperObject: MatStepper;
  public firstStep: MatStep;

  constructor() {}

  public next(): void {
    this.stepperObject.next();
  }

  public previous(): void {
    this.stepperObject.previous();
  }

  public selectFirstStep(): void {
    this.firstStep.select();
  }
}
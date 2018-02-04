import { MatStepper } from '@angular/material';

export class DeckStepper {
  public stepperObject: MatStepper;

  constructor() {}

  public next(): void {
    this.stepperObject.next();
  }

  public previous(): void {
    this.stepperObject.previous();
  }

}
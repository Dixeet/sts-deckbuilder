import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DeckBuilderComponent} from './deck-builder.component';
import {MatSidenavModule, MatStepperModule} from '@angular/material';
import { DeckBuilderStepperComponent } from './deck-builder-stepper/deck-builder-stepper.component';
import { DeckBuilderCurrentDeckComponent } from './deck-builder-current-deck/deck-builder-current-deck.component';
import { DeckBuilderContentComponent } from './deck-builder-content/deck-builder-content.component';
import { DeckBuilderService } from './deck-builder.service';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatStepperModule
  ],
  declarations: [
    DeckBuilderComponent,
    DeckBuilderStepperComponent,
    DeckBuilderCurrentDeckComponent,
    DeckBuilderContentComponent,
  ],
  providers: [DeckBuilderService]
})
export class DeckBuilderModule { }

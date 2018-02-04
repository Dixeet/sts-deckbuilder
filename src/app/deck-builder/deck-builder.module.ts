import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DeckBuilderComponent} from './deck-builder.component';
import {MatSidenavModule, MatStepperModule, MatTooltipModule} from '@angular/material';
import { DeckBuilderStepperComponent } from './deck-builder-stepper/deck-builder-stepper.component';
import { DeckBuilderCurrentDeckComponent } from './deck-builder-current-deck/deck-builder-current-deck.component';
import { DeckBuilderService } from './deck-builder.service';
import { DeckBuilderContentModule } from './deck-builder-content/deck-builder-content.module';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatStepperModule,
    DeckBuilderContentModule,
    MatTooltipModule
  ],
  declarations: [
    DeckBuilderComponent,
    DeckBuilderStepperComponent,
    DeckBuilderCurrentDeckComponent,
  ],
  providers: [DeckBuilderService]
})
export class DeckBuilderModule { }

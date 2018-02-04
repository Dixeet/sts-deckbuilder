import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DeckBuilderComponent} from './deck-builder.component';
import {MatSidenavModule, MatStepperModule} from '@angular/material';
import { DeckBuilderStepperComponent } from './deck-builder-stepper/deck-builder-stepper.component';
import { DeckBuilderCurrentDeckComponent } from './deck-builder-current-deck/deck-builder-current-deck.component';
import { DeckBuilderContentComponent } from './deck-builder-content/deck-builder-content.component';
import { DeckBuilderService } from './deck-builder.service';
import { DeckBuilderStepCharacterComponent } from './deck-builder-step-character/deck-builder-step-character.component';
import { DeckBuilderStepCardsComponent } from './deck-builder-step-cards/deck-builder-step-cards.component';
import { DeckBuilderRoutingModule } from './deck-builder-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatStepperModule,
    DeckBuilderRoutingModule
  ],
  declarations: [
    DeckBuilderComponent,
    DeckBuilderStepperComponent,
    DeckBuilderCurrentDeckComponent,
    DeckBuilderContentComponent,
    DeckBuilderStepCharacterComponent,
    DeckBuilderStepCardsComponent,
  ],
  providers: [DeckBuilderService]
})
export class DeckBuilderModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DeckBuilderContentComponent} from './deck-builder-content.component';
import {DeckBuilderStepCharacterComponent} from './deck-builder-step-character/deck-builder-step-character.component';
import {DeckBuilderRoutingModule} from '../deck-builder-routing.module';
import {DeckBuilderStepCardsComponent} from './deck-builder-step-cards/deck-builder-step-cards.component';

@NgModule({
  imports: [
    CommonModule,
    DeckBuilderRoutingModule,
  ],
  declarations: [
    DeckBuilderContentComponent,
    DeckBuilderStepCharacterComponent,
    DeckBuilderStepCardsComponent,
  ],
  exports: [
    DeckBuilderContentComponent
  ]
})
export class DeckBuilderContentModule { }

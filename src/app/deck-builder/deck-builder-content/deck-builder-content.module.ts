import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DeckBuilderContentComponent} from './deck-builder-content.component';
import {DeckBuilderStepCharacterComponent} from './deck-builder-step-character/deck-builder-step-character.component';
import {DeckBuilderRoutingModule} from '../deck-builder-routing.module';
import {DeckBuilderStepCardsComponent} from './deck-builder-step-cards/deck-builder-step-cards.component';
import { DeckBuilderStepNeutralCardsComponent } from './deck-builder-step-neutral-cards/deck-builder-step-neutral-cards.component';
import { DeckBuilderStepRelicsComponent } from './deck-builder-step-relics/deck-builder-step-relics.component';
import { DeckBuilderStepMetadataComponent } from './deck-builder-step-metadata/deck-builder-step-metadata.component';
import { DeckBuilderStepFinalComponent } from './deck-builder-step-final/deck-builder-step-final.component';
import { DeckBuilderContentTitleComponent } from './deck-builder-content-title/deck-builder-content-title.component';
import {CardsService} from '../../cards/cards.service';
import {MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatTooltipModule} from '@angular/material';
import {OrderModule} from 'ngx-order-pipe';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DeckBuilderRoutingModule,
    MatCardModule,
    MatButtonModule,
    OrderModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule
  ],
  declarations: [
    DeckBuilderContentComponent,
    DeckBuilderStepCharacterComponent,
    DeckBuilderStepCardsComponent,
    DeckBuilderStepNeutralCardsComponent,
    DeckBuilderStepRelicsComponent,
    DeckBuilderStepMetadataComponent,
    DeckBuilderStepFinalComponent,
    DeckBuilderContentTitleComponent,
  ],
  exports: [
    DeckBuilderContentComponent
  ],
  providers: [
    CardsService
  ]
})
export class DeckBuilderContentModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DeckBuilderComponent} from './deck-builder.component';
import {DeckBuilderStepCharacterComponent} from './deck-builder-content/deck-builder-step-character/deck-builder-step-character.component';
import {DeckBuilderStepCardsComponent} from './deck-builder-content/deck-builder-step-cards/deck-builder-step-cards.component';
import {DeckBuilderStepNeutralCardsComponent} from './deck-builder-content/deck-builder-step-neutral-cards/deck-builder-step-neutral-cards.component';
import {DeckBuilderStepRelicsComponent} from './deck-builder-content/deck-builder-step-relics/deck-builder-step-relics.component';
import {DeckBuilderStepMetadataComponent} from './deck-builder-content/deck-builder-step-metadata/deck-builder-step-metadata.component';
import {DeckBuilderStepFinalComponent} from './deck-builder-content/deck-builder-step-final/deck-builder-step-final.component';

const deckBuilderRoutes: Routes = [
  {
    path: 'deck/builder',
    component: DeckBuilderComponent,
    children: [
      {
        path: '',
        redirectTo: '0',
        pathMatch: 'full'
      },
      {
        path: '0',
        component: DeckBuilderStepCharacterComponent
      },
      {
        path: '1',
        component: DeckBuilderStepCardsComponent
      },
      {
        path: '2',
        component: DeckBuilderStepNeutralCardsComponent
      },
      {
        path: '3',
        component: DeckBuilderStepRelicsComponent
      },
      {
        path: '4',
        component: DeckBuilderStepMetadataComponent
      },
      {
        path: '5',
        component: DeckBuilderStepFinalComponent
      }
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(deckBuilderRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DeckBuilderRoutingModule { }

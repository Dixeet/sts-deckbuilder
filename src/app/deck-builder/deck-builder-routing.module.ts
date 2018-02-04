import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DeckBuilderComponent} from './deck-builder.component';
import {DeckBuilderStepCharacterComponent} from './deck-builder-content/deck-builder-step-character/deck-builder-step-character.component';
import {DeckBuilderStepCardsComponent} from './deck-builder-content/deck-builder-step-cards/deck-builder-step-cards.component';

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

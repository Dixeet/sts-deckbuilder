import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DeckBuilderComponent} from './deck-builder.component';
import {DeckBuilderStepCharacterComponent} from './deck-builder-step-character/deck-builder-step-character.component';

const deckBuilderRoutes: Routes = [
  {
    path: 'deck/builder',
    component: DeckBuilderComponent,
    children: [
      {
        path: '',
        component: DeckBuilderStepCharacterComponent
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

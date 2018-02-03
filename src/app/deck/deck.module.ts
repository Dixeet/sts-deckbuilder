import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckBuilderModule } from './deck-builder/deck-builder.module';
import { DeckConsultModule } from './deck-consult/deck-consult.module';

@NgModule({
  imports: [
    CommonModule,
    DeckBuilderModule,
    DeckConsultModule
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class DeckModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule, MatMenuModule, MatToolbarModule} from '@angular/material';

import {NavbarComponent} from './navbar/navbar.component';
import {MainContentComponent} from './main-content/main-content.component';
import {AppRoutingModule} from './app-routing.module';
import {CardsModule} from '../cards/cards.module';
import {RelicsModule} from '../relics/relics.module';
import {DeckModule} from '../deck/deck.module';
import {TitleService} from './title.service';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    CardsModule,
    RelicsModule,
    DeckModule
  ],
  declarations: [
    NavbarComponent,
    MainContentComponent,
  ],
  exports: [
    NavbarComponent,
    MainContentComponent
  ],
  providers: [
    TitleService
  ]
})
export class CoreModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule, MatMenuModule, MatToolbarModule} from '@angular/material';

import {NavbarComponent} from './navbar/navbar.component';
import {MainContentComponent} from './main-content/main-content.component';
import {AppRoutingModule} from './app-routing.module';
import {CardsModule} from '../cards/cards.module';
import {RelicsModule} from '../relics/relics.module';
import {TitleService} from './title.service';
import {DeckViewerModule} from '../deck-viewer/deck-viewer.module';
import {DeckBuilderModule} from '../deck-builder/deck-builder.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    CardsModule,
    RelicsModule,
    DeckViewerModule,
    DeckBuilderModule
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

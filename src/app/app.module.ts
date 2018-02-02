import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule }    from '@angular/common/http';
import {MatButtonModule, MatToolbarModule, MatCardModule} from '@angular/material/';
import { OrderModule } from 'ngx-order-pipe';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { DeckComponent } from './deck/deck.component';
import { MainContentComponent } from './main-content/main-content.component';
import { GenericCardPageComponent } from './generic-card-page/generic-card-page.component';
import { AbstractDataService } from './abstract-data.service';
import { CardsService } from './cards.service';
import { TitleService} from './title.service';
import { SubtitleComponent } from './subtitle/subtitle.component';
import { CardComponent } from './card/card.component';
import { RelicPageComponent } from './relic-page/relic-page.component';
import { RelicComponent } from './relic/relic.component';
import { RelicsService } from './relics.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DeckComponent,
    MainContentComponent,
    GenericCardPageComponent,
    SubtitleComponent,
    CardComponent,
    RelicPageComponent,
    RelicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    OrderModule,

    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [AbstractDataService, CardsService, TitleService, RelicsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

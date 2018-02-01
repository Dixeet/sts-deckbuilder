import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule }    from '@angular/common/http';
import {MatButtonModule, MatToolbarModule} from '@angular/material/';


import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { DeckComponent } from './deck/deck.component';
import { MainContentComponent } from './main-content/main-content.component';
import { GenericCardPageComponent } from './generic-card-page/generic-card-page.component';
import { AbstractDataService } from './abstract-data.service';
import { CardsService } from './cards.service';
import { TitleService} from './title.service';
import { SubtitleComponent } from './subtitle/subtitle.component';


@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    NavbarComponent,
    DeckComponent,
    MainContentComponent,
    GenericCardPageComponent,
    SubtitleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,

    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [AbstractDataService, CardsService, TitleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

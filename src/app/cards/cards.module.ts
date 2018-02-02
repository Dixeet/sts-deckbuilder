import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShareModule} from '../share/share.module';
import {CardPageComponent} from './card-page/card-page.component';
import {CardComponent} from './card/card.component';
import {CardsListComponent} from './cards-list/cards-list.component';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {CardsService} from './cards.service';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [
    CardPageComponent,
    CardComponent,
    CardsListComponent,
  ],
  providers: [
    CardsService
  ]
})
export class CardsModule { }

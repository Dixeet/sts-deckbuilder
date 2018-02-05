import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckViewerComponent } from './deck-viewer.component';
import {DeckViewerService} from './deck-viewer.service';
import {MatButtonModule, MatCardModule, MatIconModule, MatTooltipModule} from '@angular/material';
import {OrderModule} from 'ngx-order-pipe';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    OrderModule,
    MatIconModule,
    MatTooltipModule,
  ],
  declarations: [DeckViewerComponent],
  providers: [ DeckViewerService ]
})
export class DeckViewerModule { }

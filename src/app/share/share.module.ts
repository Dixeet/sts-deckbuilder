import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SubtitleComponent} from './subtitle/subtitle.component';
import {OrderModule} from 'ngx-order-pipe';

@NgModule({
  imports: [
    CommonModule,
    OrderModule,
  ],
  declarations: [
    SubtitleComponent,
  ],
  exports: [
    SubtitleComponent,
    OrderModule,
  ]
})
export class ShareModule { }

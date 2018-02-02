import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShareModule} from '../share/share.module';
import {MatTooltipModule} from '@angular/material';
import {RelicsListComponent} from './relics-list/relics-list.component';
import {RelicComponent} from './relic/relic.component';
import {RelicPageComponent} from './relic-page/relic-page.component';
import {RelicsService} from './relics.service';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    MatTooltipModule
  ],
  declarations: [
    RelicPageComponent,
    RelicComponent,
    RelicsListComponent,
  ],
  providers: [RelicsService]
})
export class RelicsModule { }

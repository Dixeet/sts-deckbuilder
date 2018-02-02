import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DeckComponent } from './deck/deck.component';
import { GenericCardPageComponent } from './generic-card-page/generic-card-page.component';
import { RelicPageComponent } from './relic-page/relic-page.component';

const routes: Routes = [
  {path: 'deck', component: DeckComponent},
  {path: 'ironclad', component: GenericCardPageComponent},
  {path: 'silent', component: GenericCardPageComponent},
  {path: 'neutral', component: GenericCardPageComponent},
  {path: 'relics', component: RelicPageComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DeckComponent } from '../deck/deck/deck.component';
import { CardPageComponent } from '../cards/card-page/card-page.component';
import { RelicPageComponent } from '../relics/relic-page/relic-page.component';

const routes: Routes = [
  {path: 'deck', component: DeckComponent},
  {path: 'ironclad', component: CardPageComponent},
  {path: 'silent', component: CardPageComponent},
  {path: 'neutral', component: CardPageComponent},
  {path: 'relics', component: RelicPageComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}

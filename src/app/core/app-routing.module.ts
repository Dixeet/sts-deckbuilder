import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CardPageComponent } from '../cards/card-page/card-page.component';
import { RelicPageComponent } from '../relics/relic-page/relic-page.component';
import {DeckBuilderComponent} from '../deck/deck-builder/deck-builder.component';
import {DeckConsultComponent} from '../deck/deck-consult/deck-consult.component';

const routes: Routes = [
  {path: 'deck/builder', component: DeckBuilderComponent},
  {path: 'deck/consult', component: DeckConsultComponent},
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

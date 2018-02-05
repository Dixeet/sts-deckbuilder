import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DeckBuilderService} from '../../deck-builder.service';
import {RelicsService} from '../../../relics/relics.service';
import {Relic} from '../../../share/relic';

@Component({
  selector: 'app-deck-builder-step-relics',
  templateUrl: './deck-builder-step-relics.component.html',
  styleUrls: ['./deck-builder-step-relics.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DeckBuilderStepRelicsComponent implements OnInit {
  baseImgSrc = '/assets/images/standard/relics/';
  relics: Relic[];

  constructor(public deckService: DeckBuilderService, private relicsService: RelicsService) { }


  public filterByType(type) {
    let filterRelics = [];
    if (this.relics && this.relics.length > 0) {
      filterRelics = this.relics.filter(relic => {
        if (relic.rarity.indexOf(type) > -1) {
          return relic;
        }
      });
    }
    return filterRelics;
  }
  
  ngOnInit() {
    this.relicsService.getAllRelics().subscribe(relics => this.relics = relics);
  }

}

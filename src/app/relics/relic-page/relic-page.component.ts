import { Component, OnInit } from '@angular/core';
import {TitleService} from '../../core/title.service';
import {RelicsService} from '../relics.service';
import {Relic} from '../../share/relic';

@Component({
  selector: 'app-relic-page',
  templateUrl: './relic-page.component.html',
  styleUrls: ['./relic-page.component.css']
})
export class RelicPageComponent implements OnInit {
  relics: Relic[] = [];
  starter: Relic[] = [];
  common: Relic[] = [];
  uncommon: Relic[] = [];
  rare: Relic[] = [];
  boss: Relic[] = [];
  event: Relic[] = [];
  shop: Relic[] = [];
  status = {
    starter: true,
    common: true,
    uncommon: true,
    rare: true,
    boss: true,
    event: true,
    shop: true,
  };

  constructor(private relicsService: RelicsService, private titleService: TitleService) {
    this.titleService.setTitle('Relics');
  }

  private getCurrentCollectionRelic() {
    this.relicsService.getAllRelics('').subscribe(relics => {
      this.relics = relics;
      this.assignType();
    });
  }

  private assignType() {
    this.relics.forEach(relic => {
      switch (true) {
        case relic.rarity.indexOf('Common') > -1:
          this.common.push(relic);
          break;
        case relic.rarity.indexOf('Uncommon') > -1:
          this.uncommon.push(relic);
          break;
        case relic.rarity.indexOf('Rare') > -1:
          this.rare.push(relic);
          break;
        case relic.rarity.indexOf('Boss') > -1:
          this.boss.push(relic);
          break;
        case relic.rarity.indexOf('Event') > -1:
          this.event.push(relic);
          break;
        case relic.rarity.indexOf('Shop') > -1:
          this.shop.push(relic);
          break;
        case relic.rarity.indexOf('Starter') > -1:
          this.starter.push(relic);
          break;
      }
    });
  }

  toggleStatus(type) {
    this.status[type] = !this.status[type];
  }

  ngOnInit() {
    this.getCurrentCollectionRelic();
  }

}

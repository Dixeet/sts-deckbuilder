import { Component, OnInit } from '@angular/core';
import {TitleService} from '../title.service';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {RelicsService} from '../relics.service';

@Component({
  selector: 'app-relic-page',
  templateUrl: './relic-page.component.html',
  styleUrls: ['./relic-page.component.css']
})
export class RelicPageComponent implements OnInit {

  // url;
  relics: any[] = [];
  starter: any[] = [];
  common: any[] = [];
  uncommon: any[] = [];
  rare: any[] = [];
  boss: any[] = [];
  event: any[] = [];
  shop: any[] = [];
  status = {
    starter: true,
    common: true,
    uncommon: true,
    rare: true,
    boss: true,
    event: true,
    shop: true,
  };

  constructor(private route: ActivatedRoute, private relicsService: RelicsService, private titleService: TitleService) {
    // this.route.url.pipe(map(segments => segments.join(''))).subscribe(url => this.url = url);
    this.titleService.setTitle('Relics ');
    this.getCurrentCollectionRelic();
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
  }

}

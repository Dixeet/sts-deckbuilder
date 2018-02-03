import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CardsService} from '../cards.service';
import {map} from 'rxjs/operators';
import { TitleService } from '../../core/title.service';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.css']
})
export class CardPageComponent implements OnInit {
  url;
  cards: any[] = [];
  attacks: any[] = [];
  skills: any[] = [];
  powers: any[] = [];
  status = {
    attack: true,
    skill: true,
    power: true
  };

  constructor(private route: ActivatedRoute, private cardsService: CardsService, private titleService: TitleService) {
    this.route.url.pipe(map(segments => segments.join(''))).subscribe(url => this.url = url);
    this.titleService.setTitle(`${this.url} cards`);
  }

  private getCurrentCollectionCards() {
    this.cardsService.getAllCards(this.url).subscribe(cards => {
      this.cards = cards;
      this.assignType();
    });
  }

  private assignType() {
    this.cards.forEach(card => {
      switch (card.type) {
        case 'Attack':
          this.attacks.push(card);
          break;
        case 'Power':
          this.powers.push(card);
          break;
        case 'Skill':
          this.skills.push(card);
          break;
      }
    });
  }

  toggleStatus(type) {
    this.status[type] = !this.status[type];
  }

  ngOnInit() {
    this.getCurrentCollectionCards();
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CardsService} from '../cards.service';
import {map} from 'rxjs/operators';
import { TitleService } from '../title.service';

@Component({
  selector: 'app-generic-card-page',
  templateUrl: './generic-card-page.component.html',
  styleUrls: ['./generic-card-page.component.css']
})
export class GenericCardPageComponent implements OnInit {
  url;
  cards: any[] = [];
  attacks: any[] = [];
  skills: any[] = [];
  powers: any[] = [];

  constructor(private route: ActivatedRoute, private cardsService: CardsService, private titleService: TitleService) {
    this.route.url.pipe(map(segments => segments.join(''))).subscribe(url => this.url = url);
    this.titleService.setTitle(`${this.url} cards`);
    this.getCurrentCollectionCards();
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

  ngOnInit() {
  }

}

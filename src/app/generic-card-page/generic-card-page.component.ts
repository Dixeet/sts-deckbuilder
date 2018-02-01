import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CardsService} from '../cards.service';
import 'rxjs/add/operator/map';
import { TitleService } from '../title.service';

@Component({
  selector: 'app-generic-card-page',
  templateUrl: './generic-card-page.component.html',
  styleUrls: ['./generic-card-page.component.css']
})
export class GenericCardPageComponent implements OnInit {
  url: String;

  constructor(private route: ActivatedRoute, private cardsService: CardsService, private titleService: TitleService) {
    this.route.url.map(segments => segments.join('')).subscribe(url => this.url = url);
    this.titleService.setTitle(`${this.url} cards`);
  }

  ngOnInit() {
    // this.url.subscribe(url => console.log(url));
    console.log(this.url);
    // this.cardsService.getAllCards().subscribe(cards => {
    //   console.log(cards);
    // });
    // this.cardsService.getAllCards('silent').subscribe(cards => {
    //   console.log(cards);
    // });
    // this.cardsService.findOneById('i3').subscribe(cards => {
    //   console.log(cards);
    // });

  }

}

import { Component, OnInit } from '@angular/core';
import {CardsService} from '../cards.service';

@Component({
  selector: 'app-generic-card-page',
  templateUrl: './generic-card-page.component.html',
  styleUrls: ['./generic-card-page.component.css']
})
export class GenericCardPageComponent implements OnInit {

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
    this.cardsService.getAllCards().subscribe(cards => {
      console.log(cards);
    });
    this.cardsService.getAllCards('silent').subscribe(cards => {
      console.log(cards);
    });
    this.cardsService.findOneById('i3').subscribe(cards => {
      console.log(cards);
    });

  }

}

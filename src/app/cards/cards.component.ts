import {Component, OnInit} from '@angular/core';
import { Card } from '../Card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  card: Card = {
    id: 1,
    name: 'Test de nom',
    description: 'premiere description'
  };

  constructor() {
  }

  ngOnInit() {
  }


}

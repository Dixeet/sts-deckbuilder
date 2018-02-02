import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent implements OnInit {

  @Input() cards;

  constructor() { }

  ngOnInit() {
  }

}

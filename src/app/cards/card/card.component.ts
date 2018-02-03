import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {

  @Input() card: any;
  baseImgSrc = '/assets/images/standard/cards/';

  constructor() { }

  ngOnInit() {
  }

}

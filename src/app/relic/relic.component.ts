import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-relic',
  templateUrl: './relic.component.html',
  styleUrls: ['./relic.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RelicComponent implements OnInit {

  @Input() relic;
  baseImgSrc = '/assets/images/standard/relics/';
  constructor() { }

  ngOnInit() {
  }

}

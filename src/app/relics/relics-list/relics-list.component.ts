import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-relics-list',
  templateUrl: './relics-list.component.html',
  styleUrls: ['./relics-list.component.css']
})
export class RelicsListComponent implements OnInit {

  @Input() relics;

  constructor() { }

  ngOnInit() {
  }

}

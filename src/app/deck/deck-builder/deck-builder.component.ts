import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {TitleService} from '../../core/title.service';
import {DeckBuilderStepperComponent} from './deck-builder-stepper/deck-builder-stepper.component';

@Component({
  selector: 'app-deck-builder',
  templateUrl: './deck-builder.component.html',
  styleUrls: ['./deck-builder.component.css']
})
export class DeckBuilderComponent implements OnInit {
  @ViewChild('stepper') mainStepper: DeckBuilderStepperComponent;

  constructor(private titleService: TitleService) {
    this.titleService.setTitle('');
  }

  ngOnInit() {
    // this.sidenav.open();
  }

  ngAfterViewInit() {
    // console.log(this.mainStepper);
    // this.mainStepper.next();
    // setTimeout(() => this.mainStepper.next(), 1000);
  }


}

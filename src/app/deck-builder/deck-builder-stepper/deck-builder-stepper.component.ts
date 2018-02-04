import {Component, OnInit, ViewChild} from '@angular/core';
import {MatStep, MatStepper} from '@angular/material';
import {DeckBuilderService} from '../deck-builder.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-deck-builder-stepper',
  templateUrl: './deck-builder-stepper.component.html',
  styleUrls: ['./deck-builder-stepper.component.css']
})
export class DeckBuilderStepperComponent implements OnInit {

  private currentStepUrl: number;
  @ViewChild('stepper') stepper: MatStepper;
  @ViewChild('step0') step0: MatStep;
  @ViewChild('step1') step1: MatStep;
  @ViewChild('step2') step2: MatStep;
  @ViewChild('step3') step3: MatStep;
  @ViewChild('step4') step4: MatStep;
  @ViewChild('step5') step5: MatStep;

  constructor(private deckService: DeckBuilderService, private route: ActivatedRoute, private router: Router) {
    this.subscribeRouteChange();
  }

  private subscribeRouteChange() {
    this.route.url.subscribe(() => {
      this.route.firstChild.url.subscribe(childUrls => {
        this.setCurrentStepUrl(childUrls);
      });
    });
  }

  private setCurrentStepUrl(childUrls) {
    this.currentStepUrl = Number(childUrls[0].toString());
    this.changeStepIfNeeded();
  }

  private changeStepIfNeeded() {
    if (this.currentStepUrl > 0 && !this.deckService.deck.characacter) {
      this.router.navigate(['/deck/builder/0'] );
    } else if (this.stepper && this.stepper.selectedIndex !== this.currentStepUrl) {
      this['step' + this.currentStepUrl].select();
    }
  }

  onStepChange($event) {
    if ($event.selectedIndex !== this.currentStepUrl ) {
      this.router.navigate(['/deck/builder/' + $event.selectedIndex] );
    }
    if ( $event.selectedIndex > 0 && !this.deckService.deck.characacter) {
      $event.selectedStep.interacted = false;
      $event.selectedStep.completed = false;
    }

  }

  ngOnInit() {
    this.deckService.setStepper(this.stepper);
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {DeckBuilderService} from '../../deck-builder.service';
import {Card} from '../../../share/card';
import {CardsService} from '../../../cards/cards.service';

@Component({
  selector: 'app-deck-builder-step-cards',
  templateUrl: './deck-builder-step-cards.component.html',
  styleUrls: ['./deck-builder-step-cards.component.css']
})
export class DeckBuilderStepCardsComponent implements OnInit {

  @Input() stepper;
  cards: Card[];
  constructor(public deckService: DeckBuilderService, private cardService: CardsService) { }

  ngOnInit() {
    this.cardService.getAllCards(this.deckService.deck.characacter).subscribe(cards => this.cards = cards);
  }

}

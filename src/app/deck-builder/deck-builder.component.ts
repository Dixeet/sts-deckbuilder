import {Component, OnInit} from '@angular/core';
import {TitleService} from '../core/title.service';
import {DeckBuilderService} from './deck-builder.service';
import {Card} from '../share/card';
import {Relic} from '../share/relic';
// import {RelicsService} from '../relics/relics.service';
// import {CardsService} from '../cards/cards.service';

@Component({
  selector: 'app-deck-builder',
  templateUrl: './deck-builder.component.html',
  styleUrls: ['./deck-builder.component.css']
})
export class DeckBuilderComponent implements OnInit {

  constructor(private titleService: TitleService, private deckService: DeckBuilderService) {
  // constructor(private titleService: TitleService, private deckService: DeckBuilderService, private relicService: RelicsService, private cardService: CardsService) {
    this.titleService.setTitle('');
  }

  ngOnInit() {
    // this.deckService.reset();
    // this.simulateDeck();
  }

  // simulateDeck() {
  //   let cards: Card[];
  //   let neutrals: Card[];
  //   let relics: Relic[];
  //   this.deckService.deck.characacter = 'silent';
  //   this.deckService.deck.title = 'Build Silent OMEGALUL POISON';
  //   this.deckService.deck.description = "Poison \n is SO good";
  //
  //   this.cardService.getAllCards('silent').subscribe(silentCards => {
  //     cards = silentCards;
  //     let ncard = 0;
  //     do {
  //       let curCard = cards[ncard];
  //       if (ncard % 6 === 0) {
  //         curCard.toggleImportant();
  //       }
  //       if (ncard % 2 === 0) {
  //         curCard.toggleUpgrade();
  //       }
  //       this.deckService.addCard(curCard);
  //       ncard++;
  //     } while (ncard <= 22);
  //     this.relicService.getAllRelics().subscribe(allRelics => {
  //       relics = allRelics;
  //       let nrelic = 0;
  //       do {
  //         let curRelic = relics[nrelic];
  //         if (nrelic % 5 === 0) {
  //           curRelic.toggleImportant();
  //         }
  //         this.deckService.addRelic(curRelic);
  //         nrelic++;
  //       } while (nrelic <= 10);
  //       this.cardService.getAllCards('neutral').subscribe(neutralCards => {
  //         neutrals = neutralCards;
  //         let nncard = 0;
  //         do {
  //           let curnCard = neutrals[nncard];
  //           if (nncard % 3 === 0) {
  //             curnCard.toggleUpgrade();
  //           }
  //           this.deckService.addCard(curnCard);
  //           nncard++;
  //         } while (nncard <= 4);
  //       });
  //     });
  //   });
  //
  // }



}

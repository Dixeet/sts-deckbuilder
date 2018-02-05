import {Card} from '../share/card';
import {Relic} from '../share/relic';

export class Deck {
  public title = '';
  public description = '';
  public characacter: string;
  public cards: Card[] = [];
  public relics: Relic[] = [];
}

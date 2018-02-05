import {Card} from '../share/card';
import {Relic} from '../share/relic';

export class Deck {
  public title = '';
  public description = '';
  public characacter: string;
  public cards: Card[] = [];
  public relics: Relic[] = [];
  public generatedCode = '';
  public generatedLink = '';

  private buildString = "";
  private stringSeparator = '££';

  public findImportantRelics(): Relic[] {
    return this.relics.filter(relic => relic.isImportant);
  }

  public findImportantCards(): Card[] {
    return this.cards.filter(card => card.isImportant);
  }

  public createLinkAndCode(str) {
    this.generatedCode = encodeURIComponent(str);
    this.generatedLink = window.location.protocol + '//' + window.location.host + '/deck/viewer?code=' + this.generatedCode;
  }

  public generateBuildString() {
    this.resetBuildString();
    this.addCharacterBuildString();
    this.addSeparator();
    this.addCardsBuildString();
    this.addSeparator();
    this.addRelicsBuildString();
    this.addSeparator();
    this.addTitleBuildString();
    this.addSeparator();
    this.addDescriptionBuildString();
    return this.buildString;
  }

  private addSeparator() {
    this.buildString += this.stringSeparator;
  }

  private resetBuildString() {
    this.buildString = "";
  }

  private addCharacterBuildString() {
    this.buildString += this.characacter[0];
  }

  private addCardsBuildString() {
    let cardsString = '';
    for (const card of this.cards) {
      let cardStr = '';
      if (cardsString !== '') {
        cardStr += '-';
      }
      if (card.isImportant) {
        cardStr += '!';
      }
      if (card.isUpgraded) {
        cardStr += '+';
      }
      cardStr += card.id;
      cardsString += cardStr;
    }
    this.buildString += cardsString;
  }

  private addRelicsBuildString() {
    let relicsString = '';
    for (const relic of this.relics) {
      let relicStr = '';
      if (relicsString !== '') {
        relicStr += '-';
      }
      if (relic.isImportant) {
        relicStr += '!';
      }
      relicStr += relic.id;
      relicsString += relicStr;
    }
    this.buildString += relicsString;
  }

  private addTitleBuildString() {
    this.buildString += this.title;
  }

  private addDescriptionBuildString() {
    this.buildString += this.description;
  }
}

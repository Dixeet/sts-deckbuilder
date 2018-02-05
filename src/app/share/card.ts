import {CardDetail} from './card-detail';
import {CardInterface} from './cardInterface';

export class Card implements CardInterface {
  public name: string;
  public camelizeName: string;
  public id: string;
  public rarity: string;
  public type: string;
  public base: CardDetail;
  public upgraded: CardDetail;
  public current: CardDetail;
  public isUpgraded = false;
  public isImportant = false;

  constructor(card?: CardInterface) {
    Object.keys(card).forEach((key) => {
      this[key] = card[key];
    });
    this.setCurrentDetail();
  }

  protected setCurrentDetail(): void {
    this.current = this.isUpgraded ? this.upgraded : this.base;
  }

  public toggleUpgrade(): void {
    this.isUpgraded = !this.isUpgraded;
    this.setCurrentDetail();
  }

  public toggleImportant(): void {
    this.isImportant = !this.isImportant;
  }

  public upgrade(): void {
    this.isUpgraded = true;
    this.setCurrentDetail();
  }

  public downgrade(): void {
    this.isUpgraded = false;
    this.setCurrentDetail();
  }

  public markImportant(): void {
    this.isImportant = true;
  }

  public unmarkImportant(): void {
    this.isImportant = false;
  }
}

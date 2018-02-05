import {RelicInterface} from './relicInterface';

export class Relic implements RelicInterface {
  public name: string;
  public camelizeName: string;
  public id: string;
  public rarity: string;
  public description: string;
  public isImportant = false;

  constructor(relic: RelicInterface) {
    Object.keys(relic).forEach((key) => {
      this[key] = relic[key];
    });
  }

  public toggleImportant(): void {
    this.isImportant = !this.isImportant;
  }

  public markImportant(): void {
    this.isImportant = true;
  }

  public unmarkImportant(): void {
    this.isImportant = false;
  }

}

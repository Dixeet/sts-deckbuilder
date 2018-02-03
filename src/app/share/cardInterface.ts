import {CardDetail} from './card-detail';

export interface CardInterface {
  name: string;
  camelizeName: string;
  id: string;
  rarity: string;
  type: string;
  base: CardDetail;
  upgraded: CardDetail;
}

import { Injectable } from '@angular/core';
import { AbstractDataService } from '../core/abstract-data.service';
import {Observable} from 'rxjs/Observable';
import {Card} from '../share/card';
import {map} from 'rxjs/operators';

@Injectable()
export class CardsService {
  private baseUrl: String = '/cards';

  constructor(private abstractDataService: AbstractDataService) {}

  private get(url): Observable<any> {
    return this.abstractDataService.get(this.baseUrl + url);
  }

  getAllCards(type = ''): Observable<Card[]> {
    return this.get('/' + type).pipe(map((cards) => {
      return cards.map(card => new Card(card));
    }));
    // return this.get('/' + type);
  }

  findOneById(id): Observable<Card> {
    return this.get(`/${id}`);
  }

}

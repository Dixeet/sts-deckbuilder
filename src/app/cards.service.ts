import { Injectable } from '@angular/core';
import { AbstractDataService } from './abstract-data.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CardsService {
  private baseUrl: String = '/cards';

  constructor(private abstractDataService: AbstractDataService) {}

  private get(url): Observable<any> {
    return this.abstractDataService.get(this.baseUrl + url);
  }

  private getArray(url): Observable<any> {
    return this.abstractDataService.getArray(this.baseUrl + url);
  }

  getAllCards(type = ''): Observable<any> {
    return this.getArray('/' + type);
  }

  findOneById(id): Observable<any> {
    return this.get(`/${id}`);
  }
}

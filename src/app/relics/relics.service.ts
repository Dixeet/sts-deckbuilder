import { Injectable } from '@angular/core';
import { AbstractDataService } from '../core/abstract-data.service';
import {Observable} from 'rxjs/Observable';
import {Relic} from '../share/relic';
import {map} from 'rxjs/operators';
import {RelicInterface} from '../share/relicInterface';

@Injectable()
export class RelicsService {
  private baseUrl: String = '/relics';

  constructor(private abstractDataService: AbstractDataService) {}

  private get(url): Observable<any> {
    return this.abstractDataService.get(this.baseUrl + url);
  }

  getAllRelics(type = ''): Observable<Relic[]> {
    return this.get('/' + type).pipe(map((relics) => {
      return relics.map(relic => new Relic(relic));
    }));
  }

  findOneById(id): Observable<Relic> {
    return this.get(`/${id}`);
  }
}

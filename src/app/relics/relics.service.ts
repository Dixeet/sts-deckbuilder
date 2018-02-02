import { Injectable } from '@angular/core';
import { AbstractDataService } from '../core/abstract-data.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RelicsService {
  private baseUrl: String = '/relics';

  constructor(private abstractDataService: AbstractDataService) {}

  private get(url): Observable<any> {
    return this.abstractDataService.get(this.baseUrl + url);
  }

  private getArray(url): Observable<any> {
    return this.abstractDataService.getArray(this.baseUrl + url);
  }

  getAllRelics(type = ''): Observable<any> {
    return this.getArray('/' + type);
  }

  findOneById(id): Observable<any> {
    return this.get(`/${id}`);
  }
}

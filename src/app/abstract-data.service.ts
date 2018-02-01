import {enableProdMode, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import {environment} from '../environments/environment';


@Injectable()
export class AbstractDataService {

  private baseUrl: String = environment.production ? '/api' : 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  // constructor() {}

  get(url): Observable<any> {
    return this.http.get<any>(this.baseUrl + url);
  }

  getArray(url): Observable<any> {
    return this.get(url).pipe(map(this.transformToArray));
  }

  private transformToArray(object) {
    return Object.values(object);
  }

}

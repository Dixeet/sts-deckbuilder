import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TitleService {
  private title = new Subject<any>();

  constructor() {
    this.setTitle('Slay The Spire - Deck Builder');
  }

  setTitle(title: string) {
    this.title.next(title);
  }

  getTitle(): Observable<any> {
    return this.title.asObservable();
  }

}

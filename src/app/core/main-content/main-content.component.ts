import { Component, OnDestroy } from '@angular/core';
import { TitleService } from '../title.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnDestroy {
  title: String = 'Slay The Spire  -  Deck Builder';
  subscription: Subscription;

  constructor(private titleService: TitleService) {
    this.subscription = this.titleService.getTitle().subscribe(title => this.title = title);
  }


  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}

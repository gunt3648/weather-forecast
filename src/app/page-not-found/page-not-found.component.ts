import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit, OnDestroy {

  timeLeft = 4;
  subscribeTimer = 5;
  subscribe: Subscription;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.observableTimer();
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

  observableTimer() {
    this.subscribe = timer(1000, 1000).subscribe(val => {
      this.subscribeTimer = this.timeLeft - val;
      if (this.subscribeTimer === 0) {
        this.router.navigate(['/']);
      }
    });
  }
}

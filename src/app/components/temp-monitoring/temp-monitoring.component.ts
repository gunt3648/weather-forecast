import { Component, OnInit } from '@angular/core';

import { ScrollTopService } from './../../services/scroll-top/scroll-top.service';

@Component({
  selector: 'app-temp-monitoring',
  templateUrl: './temp-monitoring.component.html',
  styleUrls: ['./temp-monitoring.component.scss']
})
export class TempMonitoringComponent implements OnInit {

  constructor(
    public scrollTop: ScrollTopService
  ) { }

  ngOnInit() {
    this.scrollTop.setScrollTop();
  }


}

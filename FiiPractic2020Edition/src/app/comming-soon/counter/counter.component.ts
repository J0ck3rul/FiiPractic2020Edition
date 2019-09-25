import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as moment from 'moment';
import { Date } from '../models/date';
@Component({
  selector: 'fp-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})

export class CounterComponent implements AfterViewInit, OnInit  {
  public dateNow: any;
  public startEvent: any;
  public days: number;
  public hours: number;
  public minutes: number;
  public duration: Date = new Date();

  constructor() {
    this.startEvent = moment('2019-12-22');
    this.startEvent.set('hours', 9);
    this.startEvent.set('minutes', 0);
  }

  public ngOnInit(): void {
   this.updateDurationDate();
  }

  public ngAfterViewInit(): void {
    setInterval( () => {
      this.updateDurationDate();
    }, 5000);
  }

  private updateDurationDate(): void {
    const dateNow = moment();
    this.duration.days = this.startEvent.diff(dateNow, 'days');
    this.duration.hours = this.startEvent.diff(dateNow, 'hours') % 24;
    this.duration.minutes = this.startEvent.diff(dateNow, 'minutes') % 60;
  }
}

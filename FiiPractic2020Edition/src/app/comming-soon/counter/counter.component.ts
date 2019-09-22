import { Component } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'fp-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent  {
  public dateNow: any;
  public startEvent: any;
  public duration: Date;
  public days: number;
  public hours: number;
  public minutes: number;

  constructor() {
    this.dateNow = moment();
    this.startEvent = moment('2019-10-22');
    this.startEvent.set('hours', 9);
    this.startEvent.set('minutes', 15);

    this.days = this.startEvent.diff(this.dateNow, 'days');
    this.hours = this.startEvent.diff(this.dateNow, 'hours') % 24;
    this.minutes = this.startEvent.diff(this.dateNow, 'minutes') % 60;
  }
}

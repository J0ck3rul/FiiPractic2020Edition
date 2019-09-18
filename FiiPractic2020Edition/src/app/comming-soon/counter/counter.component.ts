import { Component } from '@angular/core';

@Component({
  selector: 'fp-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent  {
  public startDate: Date = new Date();
  public duration: Date;
  public days: number = 23;
  public hours: number = 23;
  public minutes: number = 23;
  /**
   *
   */
  constructor() {
    this.startDate.setFullYear(2019, 8, 19);
    this.startDate.setHours(9, 45);

    this.duration = new Date(this.startDate.getDate() - new Date().getDate());
    this.days = this.duration.getDay();
    this.minutes = this.duration.getMinutes();
    this.days = this.duration.getHours();

    console.log(new Date().getDay());
    console.log(this.startDate.getDay());



    this.minutes = new Date().getMinutes() - this.startDate.getMinutes() ;
    this.hours = new Date().getHours() - this.startDate.getHours();

    this.days = new Date().getDay() - this.startDate.getDay() ;
  }

}

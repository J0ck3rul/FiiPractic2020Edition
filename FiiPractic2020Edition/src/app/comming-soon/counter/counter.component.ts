import { Component } from '@angular/core';

@Component({
  selector: 'fp-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent  {
  public days: number = 23;
  public hours: number = 23;
  public minutes: number = 23;
}

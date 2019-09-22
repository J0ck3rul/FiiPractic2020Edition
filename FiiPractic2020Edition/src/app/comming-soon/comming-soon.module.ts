import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { CommingSoonRoutingModule } from './comming-soon-routing.module';
import { CounterComponent } from './counter/counter.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [MainPageComponent, CounterComponent],
  imports: [
    CommonModule,
    CommingSoonRoutingModule,
    MatIconModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class CommingSoonModule { }

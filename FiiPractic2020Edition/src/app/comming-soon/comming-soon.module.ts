import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CommingSoonRoutingModule } from './comming-soon-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [MainPageComponent, CounterComponent],
  imports: [
    CommonModule,
    CommingSoonRoutingModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class CommingSoonModule { }

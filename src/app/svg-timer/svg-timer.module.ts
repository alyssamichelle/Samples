import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgTimerRoutingModule } from './svg-timer-routing.module';
import { SvgTimerComponent } from './svg-timer.component';


@NgModule({
  declarations: [
    SvgTimerComponent
  ],
  imports: [
    CommonModule,
    SvgTimerRoutingModule
  ]
})
export class SvgTimerModule { }

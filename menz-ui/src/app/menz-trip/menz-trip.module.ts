import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenzTripRoutingModule } from './menz-trip-routing.module';
import { MenzTripComponent } from './menz-trip.component';


@NgModule({
  declarations: [
    MenzTripComponent
  ],
  imports: [
    CommonModule,
    MenzTripRoutingModule
  ]
})
export class MenzTripModule { }

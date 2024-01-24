import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MenzTripRoutingModule} from './menz-trip-routing.module';
import {MenzTripComponent} from './menz-trip.component';
import { MenzTripHeaderComponent } from './menz-trip-header/menz-trip-header.component';
import { MenzTripDetailsComponent } from './menz-trip-details/menz-trip-details.component';


@NgModule({
    declarations: [
        MenzTripComponent,
        MenzTripHeaderComponent,
        MenzTripDetailsComponent
    ],
    imports: [
        CommonModule,
        MenzTripRoutingModule
    ]
})
export class MenzTripModule {
}

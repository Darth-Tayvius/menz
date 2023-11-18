import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenzTripComponent } from './menz-trip.component';

const routes: Routes = [{ path: '', component: MenzTripComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenzTripRoutingModule { }

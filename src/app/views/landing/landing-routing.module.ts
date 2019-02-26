import { NgModule } from '@angular/core';

import { LandingComponent } from './landing/landing.component';
import { RouterModule, Routes } from '@angular/router';

const landingRoutes: Routes = [
  { path: '', component: LandingComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(landingRoutes)
  ],
  exports: [RouterModule]
})
export class LandingRoutingModule { }

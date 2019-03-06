import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication/authentication-routing.module';
import { LandingRoutingModule } from './landing/landing-routing.module';
import { RentPropRoutingModule } from './rent-prop/rent-prop-routing.module';

@NgModule({
  imports: [
    AuthenticationRoutingModule,
    LandingRoutingModule,
    RentPropRoutingModule
  ],
  exports: [
    AuthenticationRoutingModule,
    LandingRoutingModule,
    RentPropRoutingModule
  ]
})
export class ViewsRoutingModule { }

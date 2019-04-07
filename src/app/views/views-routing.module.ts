import { NgModule } from '@angular/core';

import { AuthenticationRoutingModule } from './authentication/authentication-routing.module';
import { LandingRoutingModule } from './landing/landing-routing.module';
import { RentPropRoutingModule } from './rent-prop/rent-prop-routing.module';
import { AdminRoutingModule } from './admin/admin-routing.module';

@NgModule({
  imports: [
    AuthenticationRoutingModule,
    LandingRoutingModule,
    RentPropRoutingModule,
    AdminRoutingModule
  ],
  exports: [
    AuthenticationRoutingModule,
    LandingRoutingModule,
    RentPropRoutingModule,
    AdminRoutingModule
  ]
})
export class ViewsRoutingModule { }

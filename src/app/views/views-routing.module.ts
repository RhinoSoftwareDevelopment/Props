import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication/authentication-routing.module';
import { LandingRoutingModule } from './landing/landing-routing.module';

@NgModule({
  imports: [
    AuthenticationRoutingModule,
    LandingRoutingModule
  ],
  exports: [
    AuthenticationRoutingModule,
    LandingRoutingModule
  ]
})
export class ViewsRoutingModule { }

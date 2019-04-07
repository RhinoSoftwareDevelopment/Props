import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationModule } from './navigation/navigation.module';
import { RentPropModule } from './rent-prop/rent-prop.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { LandingModule } from './landing/landing.module';
import { ViewsRoutingModule } from './views-routing.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavigationModule,
    RentPropModule,
    AuthenticationModule,
    LandingModule,
    AdminModule,
    ViewsRoutingModule,
  ],
  exports: [
    NavigationModule,
    RentPropModule,
    AuthenticationModule,
    LandingModule,
    AdminModule
  ]
})
export class ViewsModule { }

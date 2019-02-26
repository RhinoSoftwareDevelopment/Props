import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationModule } from './navigation/navigation.module';
import { RentPropModule } from './rent-prop/rent-prop.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { LandingModule } from './landing/landing.module'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavigationModule,
    RentPropModule,
    AuthenticationModule,
    LandingModule,
  ],
  exports: [
    NavigationModule,
    RentPropModule,
    AuthenticationModule,
    LandingModule,
  ]
})
export class ViewsModule { }

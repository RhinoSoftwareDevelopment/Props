import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationModule } from './navigation/navigation.module';
import { RentPropModule } from './rent-prop/rent-prop.module';
import { AuthenticationModule } from './authentication/authentication.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavigationModule,
    RentPropModule,
    AuthenticationModule
  ],
  exports: [
    NavigationModule,
    RentPropModule,
    AuthenticationModule
  ]
})
export class ViewsModule { }

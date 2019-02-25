import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationModule } from './navigation/navigation.module';
import { RentPropModule } from './rent-prop/rent-prop.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavigationModule,
    RentPropModule,
  ],
  exports: [
    NavigationModule,
    RentPropModule
  ]
})
export class ViewsModule { }

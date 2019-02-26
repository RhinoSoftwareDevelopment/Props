import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { LandingComponent } from './landing/landing.component';
import { LandingRoutingModule } from './landing-routing.module';


@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialDesignModule,
    LandingRoutingModule
  ],
  exports: [
    LandingComponent
  ]
})
export class LandingModule { }

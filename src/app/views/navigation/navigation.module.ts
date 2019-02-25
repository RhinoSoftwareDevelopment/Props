import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialDesignModule } from '../material-design/material-design.module';


import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialDesignModule
  ],
  exports: [NavbarComponent]
})
export class NavigationModule { }

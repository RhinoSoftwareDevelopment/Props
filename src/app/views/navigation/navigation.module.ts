import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialDesignModule } from '../material-design/material-design.module';

import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialDesignModule,
    RouterModule
  ],
  exports: [NavbarComponent]
})
export class NavigationModule { }

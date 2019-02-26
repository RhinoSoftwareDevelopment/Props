import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MaterialDesignModule,
    FlexLayoutModule
  ],
  exports: [ LoginComponent ]
})
export class AuthenticationModule { }

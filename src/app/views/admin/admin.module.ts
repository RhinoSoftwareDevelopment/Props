import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmissionsComponent } from './submissions/submissions.component';
import { AuthenticationRoutingModule } from '../authentication/authentication-routing.module';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavigationModule } from '../navigation/navigation.module';
import { SubmissionCardComponent } from './submissions/submission-card/submission-card.component';

@NgModule({
  declarations: [SubmissionsComponent, SubmissionCardComponent],
  imports: [
    CommonModule,
    MaterialDesignModule,
    FlexLayoutModule,
    NavigationModule,
    AuthenticationRoutingModule
  ],
  exports: [
    SubmissionsComponent
  ]
})
export class AdminModule { }

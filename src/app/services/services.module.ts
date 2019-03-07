import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, FirestoreSettingsToken } from '@angular/fire/firestore';

import { environment } from '../../environments/environment';


import { AuthenticationService } from './authentication/authentication.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, 'BookProp'),
    AngularFireAuthModule
  ],
  providers: [
    AuthenticationService,
    AngularFirestore,
    { provide: FirestoreSettingsToken, useValue: {} }
  ]
})
export class ServicesModule { }

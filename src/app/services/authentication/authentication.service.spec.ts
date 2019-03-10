import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, FirestoreSettingsToken } from '@angular/fire/firestore';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      AngularFireModule.initializeApp(environment.firebase, 'BookProp'),
      AngularFireAuthModule,
      RouterTestingModule
    ],
    providers: [
      AuthenticationService,
      AngularFirestore,
      { provide: FirestoreSettingsToken, useValue: {} }
    ]
  }).compileComponents());

  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });
});

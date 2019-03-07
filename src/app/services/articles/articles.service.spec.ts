import { TestBed } from '@angular/core/testing';

import { ArticlesService } from './articles.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthenticationService } from '../authentication/authentication.service';
import { AngularFirestore, FirestoreSettingsToken } from '@angular/fire/firestore';

describe('ArticlesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      AngularFireModule.initializeApp(environment.firebase, 'BookProp'),
      AngularFireAuthModule
    ],
    providers: [
      AuthenticationService,
      AngularFirestore,
      { provide: FirestoreSettingsToken, useValue: {} }
    ]
  }).compileComponents());

  it('should be created', () => {
    const service: ArticlesService = TestBed.get(ArticlesService);
    expect(service).toBeTruthy();
  });
});

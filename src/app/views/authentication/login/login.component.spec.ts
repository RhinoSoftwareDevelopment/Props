import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { MaterialDesignModule } from '../../material-design/material-design.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthenticationRoutingModule } from '../authentication-routing.module';
import { RegisterComponent } from '../register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestore, FirestoreSettingsToken } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Chance } from 'chance';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
const chance = new Chance();

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;
  let authenticationService: AuthenticationService;
  let spyAuthenticationService: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebase, 'BookProp'),
        AngularFireAuthModule,
        MaterialDesignModule,
        FlexLayoutModule,
        AuthenticationRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      declarations: [
        LoginComponent,
        RegisterComponent
      ],
      providers: [
        AngularFirestore,
        { provide: FirestoreSettingsToken, useValue: {} }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
    authenticationService = de.injector.get(AuthenticationService);
    spyAuthenticationService = spyOn(authenticationService, 'signInUserWithEmailAndPassword').and.returnValue(false);;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid when empty form', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('should be invalid email field when empty', () => {
    let email = component.loginForm.controls['email'];
    expect(email.valid).toBeFalsy();
  });

  it('email field should be required', () => {
    let errors = {};
    let email = component.loginForm.controls['email'];
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('email should be invalid when invalid input', () => {
    let errors = {};
    let email = component.loginForm.controls['email'];
    email.setValue(chance.name());
    errors = email.errors || {};
    expect(errors['email']).toBeTruthy();
  });

  it('email should be valid when valid input', () => {
    let errors = {};
    let email = component.loginForm.controls['email'];
    email.setValue(chance.email());
    errors = email.errors || {};
    expect(errors['email']).toBeFalsy();
  });
  
  it('should be invalid password field when empty', () => {
    let password = component.loginForm.controls['password'];
    expect(password.valid).toBeFalsy();
  });
  
  it('password field should be required', () => {
    let errors = {};
    let password = component.loginForm.controls['password'];
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();
  });
  
  it('password should be invalid when invalid input', () => {
    let errors = {};
    let password = component.loginForm.controls['password'];
    password.setValue(chance.string({ length: 2 }));
    errors = password.errors || {};
    expect(errors['minlength']).toBeTruthy();
  });
  
  it('password should be valid when valid input', () => {
    let errors = {};
    let password = component.loginForm.controls['password'];
    password.setValue(chance.string({ length: 8 }));
    errors = password.errors || {};
    expect(errors['password']).toBeFalsy();
  });
  
  it('should be valid form when valid inputs', () => {
    let email = component.loginForm.controls['email'];
    let password = component.loginForm.controls['password'];
    email.setValue(chance.email());
    password.setValue(chance.string({ length: 8 }));
    expect(component.loginForm.valid).toBeTruthy();
  });

  it('should call authentication service when click login', () => {
    let email = component.loginForm.controls['email'];
    let password = component.loginForm.controls['password'];
    email.setValue(chance.email());
    password.setValue(chance.string({ length: 8 }));
    de.query(By.css('#login-button-email')).triggerEventHandler('click', null);
    expect(spyAuthenticationService).toHaveBeenCalled();
  });
});

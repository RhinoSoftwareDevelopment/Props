import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { MaterialDesignModule } from '../../material-design/material-design.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthenticationRoutingModule } from '../authentication-routing.module';
import { RegisterComponent } from '../register/register.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialDesignModule,
        FlexLayoutModule,
        AuthenticationRoutingModule
      ],
      declarations: [
        LoginComponent,
        RegisterComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});

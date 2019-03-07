import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { MaterialDesignModule } from '../../material-design/material-design.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthenticationRoutingModule } from '../authentication-routing.module';
import { LoginComponent } from '../login/login.component';
import { AuthenticationModule } from '../authentication.module';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialDesignModule,
        FlexLayoutModule,
        AuthenticationRoutingModule,
      ],
      declarations: [
        RegisterComponent,
        LoginComponent
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});

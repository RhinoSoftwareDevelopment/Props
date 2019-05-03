import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { LandingComponent } from './landing.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialDesignModule } from '../../material-design/material-design.module';
import { LandingRoutingModule } from '../landing-routing.module';
import { By } from '@angular/platform-browser';
import { DebugElement, Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes, Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({ template: '' })
class DummyComponent { }

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;
  let de: DebugElement;
  let router: Router;

  beforeEach(async(() => {
    const testRoutes: Routes = [
      { path: '', component: DummyComponent},
      { path: 'login', component: DummyComponent },
      { path: 'register', component: DummyComponent }
    ];
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(testRoutes),
        FlexLayoutModule,
        MaterialDesignModule,
        LandingRoutingModule
      ],
      declarations: [LandingComponent, DummyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have onboarding message', () => {
    expect(de.query(By.css('h1')).nativeElement.innerText).toContain('Bodega');
  });

  it('should navigate to /login when click button', fakeAsync(() => {
    const location = TestBed.get(Location);
    component.goToLogin();
    tick();
    expect(location.path()).toBe('/login');
  }));


  it('should navigate to /register when click button', fakeAsync(() => {
    const location = TestBed.get(Location);
    component.goToRegister();
    tick();
    expect(location.path()).toBe('/register');
  }));

});

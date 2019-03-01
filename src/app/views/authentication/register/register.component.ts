import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FacadeService } from 'src/app/services/facade/facade.service';
import { log } from 'util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private router: Router,
    private location: Location,
    private facadeService: FacadeService
  ) { }

  ngOnInit() {
  }

  /**
   * Navigates to the login component.
   */
  goToLogin(): void {
    this.gotToComponent('login');
  }

  /**
   * Navigates to the register component.
   */
  goToRegister(): void {
    this.gotToComponent('register');
  }

  /**
   * Opens a popup to register using facebook.
   */
  registerWithFacebook(): void {
    this.facadeService.authenticationService.googleLogin();
    this.facadeService.authenticationService.loggedUser$.subscribe(
      data => console.log(data) // TODO - Errase this log
    );
  }

  /**
   * Navigates to a specific route.
   * @param componentRoute route of the destiny component
   */
  private gotToComponent(componentRoute: string): void {
    this.router.navigate([componentRoute]);
  }

  /**
   * Goes back to the previous page.
   */
  goBack(): void {
    try {
      this.location.back();
    } catch (e) {
      console.error('Cannot go back.')
    }
  }

}

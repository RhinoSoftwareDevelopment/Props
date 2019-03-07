import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  hide = true;

  constructor(
    private router: Router,
    private location: Location,
    private authenticationService: AuthenticationService
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
    this.authenticationService.googleLogin();
    this.authenticationService.loggedUser$.subscribe(
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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = false;
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private location: Location,
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildLoginForm();
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
   * Logs in with emai and password
   */
  loginWithEmailAndPassword(): void {
    const email = this.loginForm.value['email'];
    const password = this.loginForm.value['password'];
    this.authenticationService.signInUserWithEmailAndPassword(email, password);
  }

  /**
   * Opens a popup to login using facebook.
   */
  loginWithFacebook(): void {
    this.authenticationService.googleLogin();
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
      console.error('Cannot go back.');
    }
  }

  /**
   * Builds the login form.
   */
  private buildLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

}

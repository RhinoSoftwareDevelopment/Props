import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  hide = false;
  registerForm: FormGroup;

  constructor(
    private router: Router,
    private location: Location,
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildRegisterUserForm();
  }

  /**
   * Navigates to the login component.
   */
  goToLogin(): void {
    this.gotToComponent('login');
  }

  /**
   * Opens a popup to register using facebook.
   */
  registerWithFacebook(): void {
    this.authenticationService.googleLogin();
  }

  /**
   * Registers with email and password
   */
  registerWithEmailAndPassword(): void {
    const password = this.registerForm.value['password'];
    const newUser: User = {
      displayName: this.registerForm.value['names'] + ' ' + this.registerForm.value['last_name'],
      email: this.registerForm.value['email']
    };
    this.authenticationService.createUserWithEmailAndPassword(newUser, password);
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
   * Buidls the register form.
   */
  private buildRegisterUserForm(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      names: ['', Validators.required],
      last_name: ['', Validators.required]
    });
  }

}

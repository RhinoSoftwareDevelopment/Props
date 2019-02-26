import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    private router: Router
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
   * Navigates to a specific route.
   * @param componentRoute route of the destiny component
   */
  private gotToComponent(componentRoute: string): void {
    this.router.navigate([componentRoute]);
  }

}

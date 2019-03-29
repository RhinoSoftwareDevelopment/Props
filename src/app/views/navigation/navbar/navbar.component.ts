import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { User } from 'src/app/shared/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  @Input() navbarTittle: string;
  @Input() withBackButton: boolean;
  @Input() withSearchButton: boolean;

  private loggedInUserSubscription: Subscription;
  loggedUser: User;

  constructor(
    private location: Location, 
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() { 
    this.loggedInUserSubscription = this.authenticationService.getLoggedUser().subscribe(user => this.loggedUser = user);
  }

  ngOnDestroy(): void {
    this.loggedInUserSubscription.unsubscribe();
  }

  /**
   * Goes back to the last page.
   */
  goBack() {
    this.location.back();
  }

  /**
   * Navigates to a specific route.
   * @param componentRoute route of the destiny component
   */
  gotToComponent(componentRoute: string): void {
    this.router.navigate([componentRoute]);
  }

  /**
   * Logs the user out of the session.
   */
  logout(): void {
    this.authenticationService.logout();
  }
    

}
